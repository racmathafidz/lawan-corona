import axios from 'axios';
import { FETCH_COUNTRY } from '../types';

// eslint-disable-next-line import/prefer-default-export
export const fetchCountry = () => (dispatch) => axios.get('https://covid19.mathdro.id/api/countries/indonesia/confirmed').then((response) => {
  dispatch({
    type: FETCH_COUNTRY,
    payload: response.data,
  });
});
