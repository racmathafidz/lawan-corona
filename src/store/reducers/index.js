import { combineReducers } from 'redux'

import country from './country'
import province from './province'
import date from './date'

//Combining Reducer
export default combineReducers({
    country,
    province,
    date
})