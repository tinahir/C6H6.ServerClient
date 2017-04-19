import React, {PropTypes} from 'react';

class dataTableItem extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
      return this.prop.item.lastChangeBid === nextProps.item.lastChangeBid;
  }

  render() {
    return (
        <tr key = {this.props.item.name}>
          <td className="mdl-data-table__cell--non-numeric">{this.props.item.name}</td>
          <td>{this.props.item.bestBid}</td>
          <td>{this.props.item.bestAsk}</td>
          <td>{this.props.item.lastChangeAsk}</td>
          <td>{this.props.item.lastChangeBid}</td>
          <td className="mdl-data-table__cell--non-numeric">
              <SparklineChart clearDataPoints={this.props.clearDataPoints} clearInterval={30} name={this.props.item.name} data={this.props.item.midprice}></SparklineChart>
          </td>
        </tr>
      );
  }  
}

dataTableItem.propTypes = {
    item: PropTypes.object.isRequired,
    clearDataPoints: PropTypes.func.isRequired
};

export default dataTableItem;
