import { FETCH_COUNTRY } from '../types';

const initialState = null;

// eslint-disable-next-line func-names
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_COUNTRY:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
