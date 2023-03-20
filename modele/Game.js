/**
 * @class Game
 * 
 * @property {string} id L'identifiant de la partie
 * @property {Array} participants La liste des participants à la partie
 * @property {User} host L'hôte de la partie
 * @property {Array} foundFilms La liste des films trouvés par l'API
 * 
 * @method addParticipant(user) Ajoute un participant à la partie
 */
class Game {
    constructor(id, participants, host, foundFilms) {
        this.id = id;
        this.participants = participants;
        this.host = host;
        this.foundFilms = foundFilms;
        this.createDate = new Date();
        this.status = "waitingForPlayers";
    }
  
    /** Ajoute un participant à la partie
     * 
     * @param {*} user l'utilisateur à ajouter à la partie
     */
    addParticipant(user) {
      this.participants.push(user);
    }
  
    /** Convertit l'objet en JSON
     * 
     * @returns {JSON} l'objet converti en JSON
     */
    toJSON() {
        let jsonMovies = [];
        this.foundFilms.forEach(movie => {
            jsonMovies.push(movie.toJSON());
        });
        let jsonParticipants = [];
        this.participants.forEach(participant => {
            jsonParticipants.push(participant.toJSON());
        });
        return {
            id: this.id,
            participants: jsonParticipants,
            host: this.host.toJSON(),
            foundFilms: jsonMovies
        }
    }
  }
  
  export { Game };
  