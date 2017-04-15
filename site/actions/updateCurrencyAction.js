import * as types from '../constants/actionTypes'
import _ from 'lodash';

export const updateCurrency = (currency) => ({ 
    type: types.UPDATE_CURRENCY, 
    currency : currency,
    dateModified : _.now(),
    midprice : (currency.lastChangeBid + currency.lastChangeAsk) /2
});
