import { Request, Response } from "express";
import { getDogs } from "../models/dog";
import z from "zod";

const searchSchema = z.object({
  q: z.string().min(2, "A busca precisa ter pelo menos 2 caracteres"),
});
export const search = (req: Request, res: Response) => {
  // let query: string = req.query.q as string;
  const result = searchSchema.safeParse(req.query);

  if (!result.success) {
    res.status(400).json({
      error: 'Informe uma raça para buscar.',
      details: result.error
    });
    return;
  };

  const query = result.data.q
  let list = getDogs.getFromBreed(query);

  if (list.length === 0) {
    res.status(404).json({ error: 'Nenhum cachorro encontrado com essa raça.' });
    return;
  }

  res.json(list);
};