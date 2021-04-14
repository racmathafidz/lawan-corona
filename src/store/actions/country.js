import { FETCH_COUNTRY } from '../types'

import axios from 'axios'

export const fetchCountry = () => (dispatch) => {
    return axios.get(`https://covid19.mathdro.id/api/countries/indonesia/confirmed`).then( response => {
        dispatch({
            type: FETCH_COUNTRY,
            payload: response.data
        })
    })    
}