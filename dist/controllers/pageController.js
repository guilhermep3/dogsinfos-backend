"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.details = exports.home = void 0;
const dog_1 = require("../models/dog");
const home = (req, res) => {
    try {
        const { breed, color, country, size } = req.query;
        const page = Math.max(1, parseInt(req.query.page) || 1);
        const limit = parseInt(req.query.limit) || 20;
        const maxLimit = 100;
        const finalLimit = Math.min(limit, maxLimit);
        let filteredDogs = dog_1.getDogs.getAll(0, Infinity);
        if (breed) {
            const formattedBreed = breed.toLowerCase().trim();
            filteredDogs = dog_1.getDogs.getFromBreed(formattedBreed);
        }
        if (color && typeof color === 'string') {
            const formattedColor = color.toLowerCase().trim();
            filteredDogs = filteredDogs.filter(d => d.colors.some(i => i.toLowerCase() === formattedColor.toLowerCase()));
        }
        if (country) {
            const formattedCountry = country.toLowerCase().trim();
            filteredDogs = filteredDogs.filter(d => d.countryOrigin.toLowerCase() === formattedCountry.toLowerCase());
        }
        if (size) {
            const formattedSize = size.toLowerCase().trim();
            filteredDogs = filteredDogs.filter(d => d.size.toLowerCase() === formattedSize.toLowerCase());
        }
        res.json(filteredDogs.slice((page - 1) * finalLimit, page * finalLimit));
    }
    catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};
exports.home = home;
const details = (req, res) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id) || id < 1) {
            res.status(400).json({
                error: 'ID inválido',
            });
            return;
        }
        const dog = dog_1.getDogs.getFromId(id);
        if (!dog) {
            res.status(404).json({ error: 'Cachorro não encontrado' });
            return;
        }
        res.json(dog);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};
exports.details = details;
