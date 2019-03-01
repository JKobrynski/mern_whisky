import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING
} from "../actions/types";

const initialState = {
  whiskies: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        whiskies: action.payload,
        loading: false
      };
    case DELETE_ITEM:
      return {
        ...state,
        whiskies: state.whiskies.filter(whisky => whisky._id !== action.payload)
      };
    case ADD_ITEM:
      return {
        ...state,
        whiskies: [action.payload, ...state.whiskies]
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
