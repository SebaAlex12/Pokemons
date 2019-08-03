import { Images, FetchImagesAction } from "../../actions/gallery/index";
import { ActionTypes } from "../../actions/gallery/types";

export const imagesReducer = (
  state: Images[] = [],
  action: FetchImagesAction
) => {
  switch (action.type) {
    case ActionTypes.fetchImages:
      return action.payload;
    default:
      return state;
  }
};
