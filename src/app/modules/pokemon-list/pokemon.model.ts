export interface Pokemon {
  attack: number;
  defense: number;
  evolution?: PokemonEvolution;
  hp: number;
  name: string;
  national_number: string;
  sp_atk: number;
  sp_def: number;
  speed: number;
  sprites?: PokemonSprite;
  total: number;
  type: Array<
    | 'Grass'
    | 'Poison'
    | 'Fire'
    | 'Dragon'
    | 'Flying'
    | 'Water'
    | 'Bug'
    | 'Normal'
    | 'Dark'
    | 'Electric'
    | 'Psychic'
    | 'Ice'
    | 'Steel'
    | 'Ground'
    | 'Fairy'
    | 'Fighting'
    | 'Rock'
    | 'Ghost'
  >;
  favorite?: boolean;
}

export interface PokemonEvolution {
  name: string;
}

export interface PokemonSprite {
  animated: string;
  large: string;
  normal: string;
}
