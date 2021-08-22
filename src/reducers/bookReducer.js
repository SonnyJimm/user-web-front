import { FETCH_BOOKES } from "../actions/types";

//CRUD BOOK
// manages book list
const reducerBook = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BOOKES:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default reducerBook;
