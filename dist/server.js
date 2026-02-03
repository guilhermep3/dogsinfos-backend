"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes"));
const errorHandler_1 = require("./routes/errorHandler");
const cors_1 = __importDefault(require("cors"));
const allowedOrigins = [
    'http://localhost:3000', 'https://dogsinfos.vercel.app'
];
const server = (0, express_1.default)();
const port = process.env.PORT || 3001;
server.use((0, helmet_1.default)());
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: true }));
server.use(express_1.default.static(path_1.default.resolve(__dirname, '../public')));
server.use((0, cors_1.default)({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    }
}));
server.get('/', (req, res) => {
    res.json({
        status: 'online',
        message: 'DogsInfos API is running',
        endpoints: {
            dogs: '/dogs',
            search: '/dogs/search?breed=nome',
            home: '/dogs/home?breed=nome&color=cor&country=pais&size=tamanho&page=1&limit=20',
            details: '/dogs/:id'
        }
    });
});
server.use(routes_1.default);
server.use(errorHandler_1.notFoundRequest);
server.use(errorHandler_1.errorHandler);
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
