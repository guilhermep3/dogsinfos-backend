import { Request, Response } from "express";
import { getDogs } from "../models/dog.js";

interface QueryFilters {
  breed?: string[];
  color?: string[];
  country?: string[];
  size?: string[];
}

export const home = (req: Request, res: Response) => {
  try {
    const { breed, color, country, size } = req.query as QueryFilters;

    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const limit = parseInt(req.query.limit as string) || 20;
    const maxLimit = 100;
    const finalLimit = Math.min(limit, maxLimit);

    let filteredDogs = getDogs.getAll(0, Infinity);

    const parseQueryParam = (param: any): string[] => {
      if (!param) return [];
      if (Array.isArray(param)) {
        return param.map(p => p.toString().toLowerCase().trim());
      }
      return param.toString().toLowerCase().trim().split(',').map((s: string) => s.trim());
    };

    const breeds = parseQueryParam(breed);
    const colors = parseQueryParam(color);
    const countries = parseQueryParam(country);
    const sizes = parseQueryParam(size);

    if (breeds.length > 0) {
      filteredDogs = filteredDogs.filter(d => {
        return breeds.includes(d.breed.toLowerCase());
      })
    }
    if (colors.length > 0) {
      filteredDogs = filteredDogs.filter(d => {
        return d.colors.some(c => colors.includes(c.toLowerCase()));
      })
    }
    if (countries.length > 0) {
      filteredDogs = filteredDogs.filter(d => {
        return countries.includes(d.countryOrigin.toLowerCase());
      })
    }
    if (sizes.length > 0) {
      filteredDogs = filteredDogs.filter(d => {
        return sizes.includes(d.size.toLowerCase());
      })
    }

    const total = filteredDogs.length;
    const totalPages = Math.ceil(total / finalLimit);
    const paginatedDogs = filteredDogs.slice((page - 1) * finalLimit, page * finalLimit);

    res.json({
      dogs: paginatedDogs,
      page,
      totalPages,
    });
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