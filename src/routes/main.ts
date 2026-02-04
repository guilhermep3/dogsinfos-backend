import express from "express";
import dogsRoutes from "./dogsRoutes.js";

const mainRoutes = express.Router();

mainRoutes.use('/dogs', dogsRoutes);

export default mainRoutes;