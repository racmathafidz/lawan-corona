import { FETCH_PROVINCE } from '../types'

import axios from 'axios'

export const fetchCProvince = () => (dispatch) => {
    return axios.get(`https://indonesia-covid-19.mathdro.id/api/provinsi`).then( response => {
        dispatch({
            type: FETCH_PROVINCE,
            payload: response.data
        })
    })    
}