import express from "express";
import helmet from "helmet";
import path from "path";
import { errorHandler, notFoundRequest } from "./routes/errorHandler.js";
import cors from 'cors';
import mainRoutes from "./routes/main.js";

const allowedOrigins = [
  'http://localhost:3000', 'https://dogsinfos.vercel.app'
];

const server = express();
const port = process.env.PORT || 3001;

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.resolve(__dirname, '../public')));
server.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
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

server.use(mainRoutes);
server.use(notFoundRequest);
server.use(errorHandler);

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});