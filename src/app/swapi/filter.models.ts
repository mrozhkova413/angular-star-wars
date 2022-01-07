export type Terrain = 'desert' | 'grasslands' | 'mountains' | 'rainforests';
export type Climate = 'temperate' | 'frozen' | 'murky';

export const eyesColors = ['brown', 'red', 'blue', 'yellow'];
export type EyesColor = typeof eyesColors[number];

export const hairColors = ['brown', 'blond', 'gray', 'black'];
export type HairColor = typeof hairColors[number];

export const genders = ['female', 'male'];
export type Gender = typeof genders[number];

export const sections = ['people', 'starships', 'planets'];
export type Sections = typeof sections[number]

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
