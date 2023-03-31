export interface PokemonItem {
  name: string;
  img:  string;
}

export interface PokemonStat {
  stats: StatElement[];
}

export interface StatElement {
  base_stat: number;
  effort:    number;
  stat:      StatStat;
}

export interface StatStat {
  name: string;
  url:  string;
}
