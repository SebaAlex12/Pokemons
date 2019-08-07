import { PokemonsState, ActionTypes, PokemonsAction } from "./types";

const initialState: PokemonsState = {
  pokemons: [],
  selectedPokemon: []
};

export const pokemonsReducer = (
  state: PokemonsState = initialState,
  action: PokemonsAction
): PokemonsState => {
  switch (action.type) {
    case ActionTypes.fetchPokemons:
      return { ...state, pokemons: action.payload };
    case ActionTypes.getPokemonByUrl:
      return { ...state, selectedPokemon: action.payload };
    default:
      return state;
  }
};
