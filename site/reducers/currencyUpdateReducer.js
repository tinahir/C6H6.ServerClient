import {UPDATE_CURRENCY} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';
import Immutable from 'immutable'


export default function currencyUpdateReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CURRENCY:
      return state.merge({
        currencies: action.currency
      });
    default:
      return state;
  }
}
