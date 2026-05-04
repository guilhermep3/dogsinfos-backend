import fs from "fs";
import cloudinary from "../utils/cloudinary.js";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

export const uploadDogsImages = async () => {
  try {
    const dogsPath = path.resolve(__dirname, "../public/dogs");

    const files = fs.readdirSync(dogsPath);

    for (const file of files) {
      const filePath = path.join(dogsPath, file);

      // opcional: filtrar só imagens
      if (!file.match(/\.(jpg|jpeg|png|webp)$/i)) continue;

      const result = await cloudinary.uploader.upload(filePath, {
        folder: "dogs",
      });

      console.log(`Upload feito: ${file}`);
      console.log(result.secure_url);
    }

    console.log("✅ Todos os uploads finalizados");
  } catch (error) {
    console.error("Erro ao enviar imagens dos cães:", error);
  }
}

uploadDogsImages();