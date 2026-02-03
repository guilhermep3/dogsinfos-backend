import { Request, Response } from "express";
import { getDogs } from "../models/dog.js";

export const search = (req: Request, res: Response) => {
  try {
    const breed = req.query.breed as string;

    if (!breed || typeof breed !== 'string') {
      res.status(400).json({
        error: 'Informe uma raça para buscar.',
      });
      return;
    };

    let list = getDogs.getFromBreed(breed);

    if (list.length === 0) {
      res.status(404).json({ error: 'Nenhum cachorro encontrado com essa raça.' });
      return;
    }

    res.json(list);
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};