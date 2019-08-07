import { combineReducers } from "redux";
import { pokemonsReducer } from "./Pokemons/reducers";
import { PokemonsState } from "./Pokemons/types";

export interface StoreState {
  pokemons: PokemonsState[];
}

export const reducers = combineReducers({
  pokemons: pokemonsReducer
});
