import * as types from '../constants/actionTypes'

export const updateCurrency = (currency) => ({ 
    type: types.UPDATE_CURRENCY, 
    currency : currency
});
