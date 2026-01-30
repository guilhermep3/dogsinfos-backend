import express from "express";
import dogsRoutes from "./dogsRoutes"
import { middleware } from "./middleware";

const router = express.Router();

router.use(middleware);
router.use('/dogs', dogsRoutes);

export default router;