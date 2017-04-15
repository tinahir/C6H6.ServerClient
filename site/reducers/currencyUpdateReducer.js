import {UPDATE_CURRENCY} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';
import { List, Map } from 'immutable';


const init = Map();

export default function currencyUpdateReducer(state = init, action) {
  switch (action.type) {
    case UPDATE_CURRENCY:
      action.currency.dateModified = action.dateModified;
      let newState = state.set(action.currency.name, action.currency);
      return newState;
    default:
      return state;
  }
}
