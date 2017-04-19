import React, {PropTypes} from 'react';
import SparklineChart from '../sparklinechart/index'

class dataTableItem extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
      return this.prop.item.lastChangeBid === nextProps.item.lastChangeBid;
  }

  render() {
    return (
        <tr>
          <td className="mdl-data-table__cell--non-numeric">{this.currency.item.name}</td>
          <td>{this.props.currency.bestBid}</td>
          <td>{this.props.currency.bestAsk}</td>
          <td>{this.props.currency.lastChangeAsk}</td>
          <td>{this.props.currency.lastChangeBid}</td>
          <td className="mdl-data-table__cell--non-numeric">
              <SparklineChart clearDataPoints={this.props.clearDataPoints} clearInterval={30} name={this.props.currency.name} data={this.props.currency.midprice}></SparklineChart>
          </td>
        </tr>
      );
  }  
}

dataTableItem.propTypes = {
    currency: PropTypes.object.isRequired,
    clearDataPoints: PropTypes.func.isRequired
};

export default dataTableItem;
