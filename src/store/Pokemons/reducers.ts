import { PokemonsState, ActionTypes, PokemonsAction } from "./types";

const initialState: PokemonsState = {
  pokemons: []
};

export const pokemonsReducer = (
  state = initialState,
  action: PokemonsAction
): PokemonsState => {
  switch (action.type) {
    case ActionTypes.fetchPokemons:
      return {
        ...state,
        pokemons: action.payload
      };
    case ActionTypes.getPokemonByUrl:
      return action.payload;
    default:
      return state;
  }
};
