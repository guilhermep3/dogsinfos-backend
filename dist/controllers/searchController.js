"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const dog_1 = require("../models/dog");
const search = (req, res) => {
    try {
        const breed = req.query.breed;
        if (!breed || typeof breed !== 'string') {
            res.status(400).json({
                error: 'Informe uma raça para buscar.',
            });
            return;
        }
        ;
        let list = dog_1.getDogs.getFromBreed(breed);
        if (list.length === 0) {
            res.status(404).json({ error: 'Nenhum cachorro encontrado com essa raça.' });
            return;
        }
        res.json(list);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};
exports.search = search;
