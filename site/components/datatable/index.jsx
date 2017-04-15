import React, {PropTypes} from 'react';
import StompClient from '../../../site/client-subscribe'


class datatable extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount(){
    StompClient.subscribe(this.props.updateCurrency);
  }

  componentWillUnmount() {
     StompClient.unSubscribe(this.props.updateCurrency);
  }

  convertToArray(){
     let currency = [];
     for(let item in this.props.currencyData) {
        currency.push(this.props.currencyData[item]);
     }
     return _.orderBy(currency, ['dateModified'], ['desc']);
  }

  currencyItem(item){
    return (
            <tr key = {item.name}>
            <td>{item.name}</td>
            <td>{item.bestBid}</td>
            <td>{item.bestAsk}</td>
            <td>{item.lastChangeAsk}</td>
            <td>{item.lastChangeBid}</td>
            <td>{item.midprice}</td>
            </tr>
    )
  }

  _currencyRows(){
    return this.convertToArray().map(this.currencyItem);
  }

  render() {
    return (
    <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
        <thead>
            <tr>
                <th>Name</th>
                <th>current best bid price</th>
                <th>current best ask price</th>
                <th>best bid last changed</th>
                <th>best ask price last changed</th>
                <th>midprice</th>
            </tr>
        </thead>
        <tbody>
            {this._currencyRows()}
        </tbody>
    </table>
  )}
}

datatable.propTypes = {
    currencyData: PropTypes.object.isRequired,
    updateCurrency: PropTypes.func.isRequired
};

export default datatable;