export type EyesColor = 'brown' | 'red' | 'blue' | 'yellow';
export type HairColor = 'brown' | 'blond' | 'gray' | 'black';
export type Gender = 'male' | 'female';
export type Terrain = 'desert' | 'grasslands' | 'mountains' | 'rainforests';
export type Climate = 'temperate' | 'frozen' | 'murky';

export interface PeopleFilters {
  eyesColor: EyesColor;
  hairColor: HairColor;
  gender: Gender;
}

export interface PlanetFilters {
  terrain: Terrain;
  climate: Climate;
}

export interface Filters {
  planets: PlanetFilters | null;
  people: PeopleFilters | null;
}
