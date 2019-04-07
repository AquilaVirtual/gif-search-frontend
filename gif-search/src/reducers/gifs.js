import { SEARCH_GIFS } from "../constants/constants";

const initialState = {
  data: []
};
export default function gifReducer(state = initialState, action) {
  //console.log("State in Gifs reducer", state)
  switch (action.type) {
    case SEARCH_GIFS:
      return {
        ...state,
        data: action.payload.body.data
      };
    default:
      return state;
  }
}
