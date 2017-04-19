import {UPDATE_CURRENCY, REMOVE_DATAPOINTS} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';
import { List, Map } from 'immutable';

const init = Map();

export default function currencyUpdateReducer(state = init, action) {
  switch (action.type) {
    case UPDATE_CURRENCY:
      action.currency.dateModified = action.dateModified;
      const getCurrent  = state.get(action.currency.name);
      if (getCurrent){
          getCurrent.midprice.push(action.midprice);
          action.currency.midprice =  getCurrent.midprice;
          return state.set(action.currency.name, action.currency);
      }
      else{
          action.currency.midprice = [];
          action.currency.midprice.push(action.midprice);
          return state.set(action.currency.name, action.currency);
      }
    case REMOVE_DATAPOINTS:
          const current  = state.get(action.currencyName);
          const last = current.midprice[current.midprice.length -1];
          current.midprice = [];
          current.midprice.push(last);
          return state.set(action.currencyName, current);
    default:
      return state;
  }
}
