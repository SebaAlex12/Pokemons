export interface Pokemon {
  name: string;
  url: string;
  results: [];
}

export interface SelectedPokemon {
  name: string;
  sprites: string;
}

export interface PokemonsState {
  pokemons: Pokemon[];
  selectedPokemon: SelectedPokemon[];
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
  payload: SelectedPokemon[];
}

export type PokemonsAction = FetchPokemonsAction | GetPokemonByUrlAction;
