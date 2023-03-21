/**
 * @class Movie
 * 
 * @property {string} title le titre du film
 * @property {string} imgPath le chemin vers l'image du film
 * @property {Array} genres les genres du film
 * @property {string} year l'année de sortie du film
 * @property {string} rating la note du film
 * @property {string} synopsis le synopsis du film
 */
class Movie {
    constructor(title, imgPath, genres, year, rating, synopsis) {
        this.title = title;
        this.imgPath = imgPath;
        this.genres = genres;
        this.year = year;
        this.rating = rating;
        this.synopsis = synopsis;
    }

    /** Convertit l'objet en JSON
     *   
     * @returns {JSON} l'objet converti en JSON
     */
    toJSON() {
        let genreJSON = [];
        this.genres.forEach(genre => {
            genreJSON.push(genre.toJSON());
        });
        return {
            title: this.title,
            imgPath: this.imgPath,
            genres: genreJSON,
            year: this.year,
            rating: this.rating,
            synopsis: this.synopsis
        }
    }
}

export { Movie };