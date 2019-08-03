import { Dispatch } from "redux";
import axios from "axios";
import { ActionTypes } from "./types";

export interface Images {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnail: string;
}

export interface FetchImagesAction {
  type: ActionTypes.fetchImages;
  payload: Images[];
}

// const url =
//   "https://serwer1966487.home.pl/tools/pictures/ustronie_morskie_2019.json";
const url = "https://jsonplaceholder.typicode.com/photos";

export const fetchImages = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Images[]>(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    });
    // console.log(url);
    dispatch<FetchImagesAction>({
      type: ActionTypes.fetchImages,
      payload: response.data
    });
  };
};
