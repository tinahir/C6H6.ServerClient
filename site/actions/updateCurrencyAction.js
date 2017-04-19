import * as types from '../constants/actionTypes'
import _ from 'lodash';

export const updateCurrency = (currency) => ({ 
    type: types.UPDATE_CURRENCY, 
    currency : currency,
    midprice : (currency.lastChangeBid + currency.lastChangeAsk) /2
});

export const removeDataPoints = (currencyName) => ({ 
    type: types.REMOVE_DATAPOINTS, 
    currencyName : currencyName
});
