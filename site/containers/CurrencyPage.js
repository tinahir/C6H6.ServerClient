import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/updateCurrencyAction';
import CurrencyDataTable from '../components/datatable/index'
import { select } from '../state-selector';

export const CurrencyPage = (props) => {
  return (
    <CurrencyDataTable 
        updateCurrency={props.actions.updateCurrency}  
        currencyData={props.currencyData}
        clearDataPoints={props.actions.removeDataPoints}
    />
  );
};

CurrencyPage.propTypes = {
  actions: PropTypes.object.isRequired,
  currencyData: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    currencyData: state.currencyUpdateReducer.currencyData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(select, mapDispatchToProps)(CurrencyPage);
