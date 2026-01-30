import express from "express";
import { getDogs } from "../models/dog";
import * as searchController from "../controllers/searchController";
import * as pageController from "../controllers/pageController";

const router = express.Router();

router.get('/', (req, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;

    const maxLimit = 100;
    const finalLimit = limit > maxLimit ? maxLimit : limit;

    const offset = (page - 1) * finalLimit;
  
    const dogs = getDogs.getAll(offset, finalLimit);
    res.json(dogs);
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
})
router.get('/search', searchController.search);
router.get('/home', pageController.home);
router.get('/:id', pageController.details);

export default router;