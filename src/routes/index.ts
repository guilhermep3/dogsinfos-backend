import express from "express";
import dogsRoutes from "./dogsRoutes.js";

const router = express.Router();

router.use('/dogs', dogsRoutes);

export default router;