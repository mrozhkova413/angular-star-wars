export const sections = ['people', 'starships', 'planets'];
export type Sections = typeof sections[number];

export const eyesColors = ['brown', 'red', 'blue', 'yellow', 'black', 'orange', 'hazel', null];
export type EyesColor = typeof eyesColors[number];

export const hairColors = ['brown', 'blond', 'gray', 'black', 'auburn', 'white', 'n/a', 'none', null];
export type HairColor = typeof hairColors[number];

export const genders = ['female', 'male', 'n/a', null];
export type Gender = typeof genders[number];

export const terrains = ['desert', 'grasslands', 'mountains', 'rainforests', 'rock', 'barren', 'volcanoes', 'lava rivers', 'caves', 'scrublands', 'savanna', 'canyons', 'sinkholes', 'jungle', 'forests', 'lakes', 'rivers', 'grass', null];
export type Terrain = typeof terrains[number];

export const climate = ['temperate', 'frozen', 'murky', 'arid', 'tropical', 'hot', 'windy', 'moist', null];
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
