import { DogData, dogsData, Size } from "../models/dogs";
import { Filters } from "../services/dogs";

export const dogsRepositories = {
  findAll: (offset: number, limit: number): DogData[] => {
    return dogsData.slice(offset, offset + limit);
  },
  getFromBreed: (breed: string): DogData[] => {
    return dogsData.filter(i => i.breed.toLowerCase().indexOf(breed.toLowerCase()) > -1)
  },
  getFromSize: (size: Size): DogData[] => {
    return dogsData.filter(i => i.size === size);
  },
  getFromColors: (colors: string): DogData[] => {
    return dogsData.filter(i => i.colors.includes(colors));
  },
  getFromCountry: (country: string): DogData[] => {
    return dogsData.filter(i => i.countryOrigin === country)
  },
  getFromId: (id: number): DogData => {
    return dogsData.find(i => i.id === id)!;
  },
  getDogsCount: () => {
    return dogsData.length;
  },
  findWithFilters: (filters: Filters, page: number, limit: number) => {
    let result = dogsData;
    if (filters.breed?.length) {
      result = result.filter(d =>
        filters.breed!.includes(d.breed.toLowerCase())
      );
    }

    if (filters.classification?.length) {
      result = result.filter(d =>
        d.classification.some(c =>
          filters.classification!.includes(c.toLowerCase())
        )
      );
    }

    if (filters.color?.length) {
      result = result.filter(d =>
        d.colors.some(c =>
          filters.color!.includes(c.toLowerCase())
        )
      );
    }

    if (filters.country?.length) {
      result = result.filter(d =>
        filters.country!.includes(d.countryOrigin.toLowerCase())
      );
    }

    if (filters.size?.length) {
      result = result.filter(d =>
        filters.size!.includes(d.size.toLowerCase())
      );
    }

    const total = result.length;
    const totalPages = Math.ceil(total / limit);

    const data = result.slice((page - 1) * limit, page * limit);

    return {
      dogs: data,
      pagination: {
        page,
        limit,
        total,
        totalPages
      }
    };
  },
  findById(id: number) {
    return dogsData.find(d => d.id === id);
  },
  findByBreed(breed: string) {
    return dogsData.filter(d =>
      d.breed.toLowerCase().includes(breed.toLowerCase())
    );
  }
}