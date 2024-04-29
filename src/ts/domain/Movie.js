"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Movie {
    constructor(id, title, year, country, slogan, genre, duration) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.country = country;
        this.slogan = slogan;
        this.genre = genre;
        this.duration = duration;
    }
}
exports.default = Movie;
