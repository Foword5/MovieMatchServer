/**
 * @class User
 * 
 * @property {string} id L'identifiant de l'utilisateur
 * @property {string} pseudo Le pseudo de l'utilisateur
 * @property {WebSocket} ws La connexion WebSocket de l'utilisateur
 * @property {Array} likedFilms La liste des films aimés par l'utilisateur
 * 
 * @method addFilm(film) Ajoute un film à la liste des films aimés par l'utilisateur
 */
class User {
    constructor(id, pseudo, ws) {
        this.id = id;
        this.pseudo = pseudo;
        this.ws = ws;
        this.likedFilms = [];
    }

    /** Ajoute un film à la liste des films aimés par l'utilisateur
     * 
     * @param {*} film le film à ajouter
     */
    addFilm(film) {
        this.likedFilms.push(film);
    }

    /** Convertit l'objet en JSON
     * 
     * @returns {JSON} l'objet converti en JSON
     */
    toJSON() {
        let jsonMovies = [];
        this.likedFilms.forEach(movie => {
            jsonMovies.push(movie.toJSON());
        });
        return {
            id: this.id,
            pseudo: this.pseudo,
            likedFilms: jsonMovies
        }
    }
}

export { User };