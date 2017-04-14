import React, {PropTypes} from 'react';
import StompClient from './site/client-subscribe'

class datatable extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.update = this.update.bind();
  }

  componentDidMount(){
    StompClient.subscribe(this.update);
  }

  componentWillUnmount() {
     StompClient.unSubscribe(this.update);
  }

  update(currency) {
    this.props.updateCurrency(currency);
  }

  _currencyRows(){
    const currencyItem = (item) => {
         return (
            <tr key = {item.name}>
            <td>{item.name}</td>
            <td>{item.bestBid}</td>
            <td>{item.bestAsk}</td>
            <td>{item.lastChangeAsk}</td>
            <td>{item.lastChangeBid}</td>
            </tr>
         )
     };
     if (props.currencyData.length > 0)
     {
        return props.currencyData.map(currencyItem);
     }
     else{
        return (
            <tr>
                <td colSpan="5">No record found</td>
           </tr>
        );
     }
  }

  render() {
    const {fuelSavings} = this.props;

    return (
    <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
        <thead>
            <tr>
                <th>Name</th>
                <th>current best bid price</th>
                <th>current best ask price</th>
                <th>best bid last changed</th>
                <th>best ask price last changed</th>
            </tr>
        </thead>
        <tbody>
            {this._currencyRows()}
        </tbody>
    </table>
  )}
}

datatable.propTypes = {
    currencyData: PropTypes.array.isRequired,
    updateCurrency: PropTypes.func.isRequired
};

export default datatable;