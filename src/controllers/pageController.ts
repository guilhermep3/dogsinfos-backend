import { Request, Response } from "express";
import { getDogs } from "../models/dog.js";

interface QueryFilters {
  breed?: string;
  color?: string;
  country?: string;
  size?: string;
}
export const home = (req: Request, res: Response) => {
  try {
    const { breed, color, country, size } = req.query as QueryFilters;

    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const limit = parseInt(req.query.limit as string) || 20;
    const maxLimit = 100;
    const finalLimit = Math.min(limit, maxLimit);

    let filteredDogs = getDogs.getAll(0, Infinity);

    if (breed) {
      const formattedBreed = breed.toLowerCase().trim();
      filteredDogs = getDogs.getFromBreed(formattedBreed);
    }
    if (color && typeof color === 'string') {
      const formattedColor = color.toLowerCase().trim();
      filteredDogs = filteredDogs.filter(d =>
        d.colors.some(i => i.toLowerCase() === formattedColor.toLowerCase())
      );
    }
    if (country) {
      const formattedCountry = country.toLowerCase().trim();
      filteredDogs = filteredDogs.filter(d =>
        d.countryOrigin.toLowerCase() === formattedCountry.toLowerCase()
      );
    }
    if (size) {
      const formattedSize = size.toLowerCase().trim();
      filteredDogs = filteredDogs.filter(d =>
        d.size.toLowerCase() === formattedSize.toLowerCase()
      );
    }

    res.json(filteredDogs.slice((page - 1) * finalLimit, page * finalLimit));
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

export const details = (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id) || id < 1) {
      res.status(400).json({
        error: 'ID inválido',
      });
      return;
    }

    const dog = getDogs.getFromId(id);

    if (!dog) {
      res.status(404).json({ error: 'Cachorro não encontrado' });
      return;
    }

    res.json(dog);
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};