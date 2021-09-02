import axios from 'axios';
import { FETCH_PROVINCE } from '../types';

// eslint-disable-next-line import/prefer-default-export
export const fetchProvince = () => (dispatch) => axios.get('https://indonesia-covid-19.mathdro.id/api/provinsi').then((response) => {
  dispatch({
    type: FETCH_PROVINCE,
    payload: response.data,
  });
});
