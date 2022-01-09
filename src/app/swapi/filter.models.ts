export const eyesColors = ['brown', 'red', 'blue', 'yellow'];
export type EyesColor = typeof eyesColors[number];

export const hairColors = ['brown', 'blond', 'gray', 'black'];
export type HairColor = typeof hairColors[number];

export const genders = ['female', 'male'];
export type Gender = typeof genders[number];

export const sections = ['people', 'starships', 'planets'];
export type Sections = typeof sections[number];

export const terrains = ['desert', 'grasslands', 'mountains', 'rainforests'];
export type Terrain = typeof terrains[number];

export const climate = ['temperate', 'frozen', 'murky'];
export type Climate = typeof climate[number]

export interface PeopleFilters {
  eyesColor: EyesColor;
  hairColor: HairColor;
  gender: Gender;
}

export interface PlanetsFilters {
  terrain: Terrain;
  climate: Climate;
  rotation_period: number;
}

export interface StarshipsFilters {
  max_atmosphering_speed: number;
  passengers: number;
}

export interface Filters {
  planets: PlanetsFilters | null;
  people: PeopleFilters | null;
  starships: StarshipsFilters | null;
}
