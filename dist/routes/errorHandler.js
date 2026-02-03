"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.notFoundRequest = void 0;
const notFoundRequest = (req, res) => {
    res.json({ error: 'Route not found' });
};
exports.notFoundRequest = notFoundRequest;
const errorHandler = (err, req, res, next) => {
    res.json({ error: 'Ocorreu um erro' });
};
exports.errorHandler = errorHandler;
