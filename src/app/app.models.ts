export interface Character2 {
  id: number;
  name: string;
  planet: string;
};

export interface Character {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  vehicles: string[];
};

export interface PagedResults<T> {
  count: number;
  next?: string;
  previous: string;
  results: T[];
};

