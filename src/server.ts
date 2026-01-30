import express from "express";
import helmet from "helmet";
import path from "path";
import indexRoutes from "./routes";
import { errorHandler, notFoundRequest } from "./routes/errorHandler";
import cors from 'cors';

const server = express();
const port = process.env.PORT || 3001;
const allowedOrigins = ['http://localhost:3000', 'https://dogsinfos.vercel.app'];

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
  });
});

server.use(indexRoutes);
server.use(notFoundRequest);
server.use(errorHandler);

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});