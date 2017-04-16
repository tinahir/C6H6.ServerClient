import {UPDATE_CURRENCY} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';
import { List, Map } from 'immutable';

const init = Map();

export default function currencyUpdateReducer(state = init, action) {
  switch (action.type) {
    case UPDATE_CURRENCY:
      let newState;
      action.currency.dateModified = action.dateModified;
      if (state.has(action.currency.name)){
          const current  = state.get(action.currency.name);
          current.midprice.push(action.midprice);
          action.currency.midprice =  current.midprice;
          newState = state.mergeIn([action.currency.name], action.currency);
      }
      else{
          action.currency.midprice = [];
          action.currency.midprice.push(action.midprice);
          newState = state.set(action.currency.name, action.currency);
      }
      return newState;
    default:
      return state;
  }
}
