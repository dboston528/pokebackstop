import {
  SET_POKEMON,
  API_START,
  API_END,
  FETCH_POKEMON,
} from '../actions/types';

const initialState = { byId: {}, allIds: [] };

export default function (state = initialState, action) {
  console.log('action type => ', action.type);
  switch (action.type) {
    case SET_POKEMON:
      console.log(action.payload);
      return { data: action.payload };

    case API_START:
      if (action.payload === FETCH_POKEMON) {
        return {
          ...state,
          isLoadingData: true,
        };
      }
      break;
    case API_END:
      if (action.payload === FETCH_POKEMON) {
        return {
          ...state,
          isLoadingData: false,
        };
      }
      break;
    default:
      return state;
  }
}
