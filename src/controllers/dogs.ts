import { Request, Response } from "express";
import { dogsService } from "../services/dogs";

const parseQueryArray = (param: any): string[] => {
  if (!param) return [];
  if (Array.isArray(param)) {
    return param.map(p => p.toLowerCase().trim());
  }
  return param.split(',').map((s: string) => s.trim().toLowerCase());
};

export const getDogs = (req: Request, res: Response) => {
  try {
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(Number(req.query.limit) || 20, 100);

    const filters = {
      breed: parseQueryArray(req.query.breed),
      classification: parseQueryArray(req.query.classification),
      color: parseQueryArray(req.query.color),
      country: parseQueryArray(req.query.country),
      size: parseQueryArray(req.query.size),
    };

    const result = dogsService.getFilteredDogs(filters, page, limit);

    res.json(result);
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const searchDogs = (req: Request, res: Response) => {
  const breed = req.query.breed as string;

  if (!breed) {
    return res.status(400).json({ error: "Breed is required" });
  }

  const result = dogsService.searchByBreed(breed);

  if (!result.length) {
    return res.status(404).json({ error: "No dogs found" });
  }

  res.json(result);
};

export const getDogDetails = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (!id) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  const dog = dogsService.getDogById(id);

  if (!dog) {
    return res.status(404).json({ error: "Dog not found" });
  }

  res.json(dog);
};