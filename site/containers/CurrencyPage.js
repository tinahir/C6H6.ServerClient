import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/updateCurrencyAction';

export const CurrencyPage = (props) => {
  return (
    <CurrencyDataTable 
        updateCurrency={prop.actions.updateCurrency}  
        currencyData={props.currencyData} 
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

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyPage);
