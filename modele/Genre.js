/**
 * Classe représentant un genre de film
 * 
 * @param {number} id L'identifiant du genre
 * @param {string} name Le nom du genre
 */
class Genre {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name
        }
    }
}

export { Genre };