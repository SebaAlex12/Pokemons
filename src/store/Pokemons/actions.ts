import { Dispatch } from "redux";
import axios from "axios";
import {
  Pokemon,
  SelectedPokemon,
  ActionTypes,
  FetchPokemonsAction,
  GetPokemonByUrlAction
} from "./types";

const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964";

export const fetchPokemons = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Pokemon>(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    });
    dispatch<FetchPokemonsAction>({
      type: ActionTypes.fetchPokemons,
      payload: response.data.results
    });
  };
};

export const getPokemonByUrl = (pcurl: string) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<SelectedPokemon[]>(pcurl, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    });
    dispatch<GetPokemonByUrlAction>({
      type: ActionTypes.getPokemonByUrl,
      payload: response.data
    });
  };
};
