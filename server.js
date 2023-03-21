import { WebSocketServer } from 'ws';
import { Game } from './modele/Game.js' ;
import { User } from './modele/User.js' ;
import { Movie } from './modele/Movie.js' ;

const wss = new WebSocketServer({ port: 8080 });

console.log("Server started on port \x1b[92m8080\x1b[0m")

let games = [];

wss.on('connection', function connection(ws) {
    try {
    console.log("· New connection : \x1b[92m" + ws._socket.remoteAddress + "\x1b[0m");

    for(let game of games) { // supprimer les parties trop anciennes (2 jours) (une partie n'aurait pas été supprimée)
        if(game.createDate.getTime() < new Date().getTime() - 2 * 24 * 60 * 60 * 1000) {
            games.splice(games.indexOf(game), 1);
            console.log("· Deleted a game with id : \x1b[33m" + str(game.id) + "\x1b[0m")
        }
    }
    ws.on('message', function message(data) {
        try {
            data = JSON.parse(data); // convertir le message en objet JSON
            switch(data["type"]) { // vérifier le type de message*

                case "newGame":
                    let id;
                    for(id = Math.floor(Math.random() * 1000000); games.find(game => game.id == id) != undefined;id=Math.floor(Math.random() * 1000000)); // trouver un id libre
                    let host = new User(0, data["hostName"], ws);

                    let films = [];
                    for(let element of data["films"]) {
                        films.push(new Movie(element["title"], element["imgPath"], element["genres"], element["year"], element["rating"], element["synopsis"]));
                    }
                    let game = new Game(id, [host], host, films);
                    games.push(game);
                    ws.send(
                        JSON.stringify({"type": "newGameSuccess"}) // envoyer un message de succès
                    )
                    console.log("· Created a new game with id : \x1b[33m" + id + "\x1b[0m")
                    break;


                case "joinGame":
                    let gameToJoin = games.find(game => game.id == data["gameId"]);
                    if(gameToJoin == undefined) {
                        ws.send(
                            JSON.stringify({"type": "error", "message": "Partie introuvable"})
                        );
                        break;
                    }
                    let idUser;
                    for(idUser = 0; gameToJoin.participants.find(user => user.id == idUser) != undefined;idUser++);
                    let user = new User(idUser, data["userName"], ws);
                    gameToJoin.addParticipant(user);
                    ws.send(
                        JSON.stringify({
                            "type": "joinGameSuccess",
                            "game": gameToJoin.toJSON()
                        }) // envoyer un message de succès avec la partie
                    )
                    for(let participant of gameToJoin.participants) {
                        if(participant.ws != ws) {
                            participant.ws.send(
                                JSON.stringify({
                                    "type": "newPlayer",
                                    "user": user.toJSON()
                                }) // envoyer un message aux autres participants
                            )
                        }
                    }
                    console.log("· User \x1b[31m" + user.pseudo +" \x1b[m(\x1b[31m" + user.id + "\x1b[0m) joined game \x1b[33m" + gameToJoin.id + "\x1b[0m")
                    break;


                case "startGame":
                    let gameToStart = games.find(game => game.id == data["gameId"]);
                    if(gameToStart == undefined) {
                    
                        ws.send(
                            JSON.stringify({"type": "error", "message": "Partie introuvable"})
                        );
                        break;
                    }
                    if(gameToStart.host.ws != ws) {
                        ws.send(
                            JSON.stringify({"type": "error", "message": "Vous n'êtes pas l'hôte de cette partie"})
                        );
                        break;
                    }
                    if(gameToStart.status != "waitingForPlayers") {
                        ws.send(
                            JSON.stringify({"type": "error", "message": "La partie a déjà commencé"})
                        );
                        break;
                    }
                    gameToStart.status = "started";
                    for(let participant of gameToStart.participants) {
                        participant.ws.send(
                            JSON.stringify({
                                "type": "startGame",
                                "game": gameToStart.toJSON()
                            })
                        );
                    }
                    console.log("· Game \x1b[33m" + gameToStart.id + "\x1b[0m started")
                    break;


                case "sendResult":
                    let gameToAddResult = games.find(game => game.id == data["gameId"]);
                    if(gameToAddResult == undefined) {
                        ws.send(
                            JSON.stringify({"type": "error", "message": "Partie introuvable"})
                        );
                        break;
                    }
                    if(gameToAddResult.status != "started") {
                        ws.send(
                            JSON.stringify({"type": "error", "message": "La partie n'a pas commencé"})
                        );
                        break;
                    }
                    let userToAddResult = gameToAddResult.participants.find(user => user.ws == ws);
                    if(userToAddResult == undefined) {
                        ws.send(
                            JSON.stringify({"type": "error", "message": "Vous n'êtes pas participant à cette partie"})
                        );
                        break;
                    }
                    let likedFilms = [];
                    for(let element of data["likedFilms"]) {
                        likedFilms.push(new Movie(element["title"], element["imgPath"], element["genres"], element["year"], element["rating"], element["synopsis"]));
                    }
                    userToAddResult.likedFilms = likedFilms;
                    for(let participant of gameToAddResult.participants) {
                        if(participant.ws != ws){
                            participant.ws.send(
                                JSON.stringify({
                                    "type": "newResult",
                                    "user": userToAddResult.toJSON()
                                })
                            );
                        }
                    }
                    console.log("· User \x1b[31m" + userToAddResult.pseudo +" \x1b[m(\x1b[31m" + userToAddResult.id + "\x1b[0m) added result to game \x1b[33m" + gameToAddResult.id + "\x1b[0m")

                    break;
                

                case "stopGame":
                    let gameToStop = games.find(game => game.id == data["gameId"]);
                    if(gameToStop == undefined) {
                        ws.send(
                            JSON.stringify({"type": "error", "message": "Partie introuvable"})
                        );
                        break;
                    }
                    if(gameToStop.host.ws != ws) {
                        ws.send(
                            JSON.stringify({"type": "error", "message": "Vous n'êtes pas l'hôte de cette partie"})
                        );
                        break;
                    }
                    if(gameToStop.status != "started") {
                        ws.send(
                            JSON.stringify({"type": "error", "message": "La partie n'a pas commencé"})
                        );
                        break;
                    }
                    gameToStop.status = "stopped";
                    for(let participant of gameToStop.participants) {
                        participant.ws.send(
                            JSON.stringify({
                                "type": "stopGame",
                                "game": gameToStop.toJSON()
                            })
                        );
                    }
                    games.splice(games.indexOf(gameToStop), 1);
                    console.log("· Game \x1b[33m" + gameToStop.id + "\x1b[0m stopped")
                    break;


                default:
                    ws.send(
                        JSON.stringify({"type": "error", "message": "Type de message inconnu"})
                    );
                    console.log("· Weird message received : "+data)
                    break;
            }
        }catch(error){
            console.log(error);
        }
    });
    }catch(error){
        console.log(error);
    }
});

