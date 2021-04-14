import { FETCH_PROVINCE } from '../types'

const initialState = null

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PROVINCE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}