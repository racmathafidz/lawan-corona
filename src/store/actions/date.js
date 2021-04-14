import { FETCH_DATE } from '../types'

import axios from 'axios'

export const fetchDate = () => (dispatch) => {
    return axios.get("https://covid19.mathdro.id/api/countries/indonesia/").then( response => {
        dispatch({
            type: FETCH_DATE,
            payload: response.data
        })
    })
}