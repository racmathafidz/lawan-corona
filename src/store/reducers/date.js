import { FETCH_DATE } from '../types'

const initialState = null

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_DATE:
            return {
                ...state,
                ...action.payload
            }
        default :
            return state;
    }
}
