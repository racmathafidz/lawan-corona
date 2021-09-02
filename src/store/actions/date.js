import axios from 'axios';
import { FETCH_DATE } from '../types';

// eslint-disable-next-line import/prefer-default-export
export const fetchDate = () => (dispatch) => axios.get('https://covid19.mathdro.id/api/countries/indonesia/').then((response) => {
  dispatch({
    type: FETCH_DATE,
    payload: response.data,
  });
});
