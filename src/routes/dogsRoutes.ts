import express, { RequestHandler } from "express";
import * as dogController from "../controllers/dogs.js";

const router = express.Router();

router.get("/", dogController.getDogs);
router.get("/search", dogController.searchDogs as RequestHandler);
router.get("/:id", dogController.getDogDetails as RequestHandler);

export default router;