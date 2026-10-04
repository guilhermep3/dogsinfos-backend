import { dogsRepositories } from "../repositories/dogs.js";

export interface Filters {
  breed?: string[];
  classification?: string[];
  color?: string[];
  country?: string[];
  size?: string[];
}

export const dogsService = {
  getFilteredDogs(filters: Filters, page: number, limit: number) {
    return dogsRepositories.findWithFilters(filters, page, limit);
  },

  getDogBySlug(slug: string) {
    return dogsRepositories.findBySlug(slug);
  },

  searchByBreed(breed: string) {
    return dogsRepositories.findByBreed(breed);
  }
};