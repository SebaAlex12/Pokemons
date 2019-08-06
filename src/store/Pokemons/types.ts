export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonsState {
  pokemons: Pokemon[];
}

export enum ActionTypes {
  fetchPokemons = "FETCH_POKEMONS",
  getPokemonByUrl = "GET_POKEMON_BY_URL"
}

export interface FetchPokemonsAction {
  type: ActionTypes.fetchPokemons;
  payload: Pokemon[];
}

export interface GetPokemonByUrlAction {
  type: ActionTypes.getPokemonByUrl;
  payload: any;
}

export type PokemonsAction = FetchPokemonsAction | GetPokemonByUrlAction;
