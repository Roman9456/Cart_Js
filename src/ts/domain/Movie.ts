"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Movie {
    constructor(
        readonly id: number,
        readonly title: string,
        readonly year: number,
        readonly country: string,
        readonly slogan: string,
        readonly genre: string,
        readonly duration: number
    ) {}
}
exports.default = Movie;