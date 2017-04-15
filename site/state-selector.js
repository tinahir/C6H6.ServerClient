import _ from 'lodash';

export function select(state) {
    return _.assign({}, state, {
        currencyData: _.result(state.currencyUpdateReducer, 'toJS', [])
    });
}
