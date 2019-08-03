import { combineReducers } from "redux";
import { imagesReducer } from "./gallery/index";
import { Images } from "../actions/gallery/index";

export interface StoreState {
  images: Images[];
}

export const reducers = combineReducers<StoreState>({
  images: imagesReducer
});
