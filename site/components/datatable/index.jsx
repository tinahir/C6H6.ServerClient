import React, {PropTypes} from 'react';
import StompClient from '../../../site/client-subscribe'
import SparklineChart from '../sparklinechart/index'

class datatable extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    StompClient.subscribe(this.props.updateCurrency);
  }

  componentWillUnmount() {
     StompClient.unSubscribe(this.props.updateCurrency);
  }

  currencyRows(){
    return this.props.currencyData.map((item) =>{
      return (
        <tr key = {item.name}>
          <td className="mdl-data-table__cell--non-numeric">{item.name}</td>
          <td>{item.bestBid}</td>
          <td>{item.bestAsk}</td>
          <td>{item.lastChangeAsk}</td>
          <td>{item.lastChangeBid}</td>
          <td className="mdl-data-table__cell--non-numeric">
              <SparklineChart clearDataPoints={this.props.clearDataPoints} clearInterval={30} name={item.name} data={item.midprice}></SparklineChart>
          </td>
        </tr>
      );
    });
  }

  render() {
    if(_.isEmpty(this.props.currencyData)){
      return (<div>No Data</div>);
    }

    return (
    <table className="mdl-data-table mdl-data-table--selectable mdl-shadow--2dp">
        <thead>
            <tr>
                <th className="mdl-data-table__cell--non-numeric">Name</th>
                <th>Current best bid price</th>
                <th>Current best ask price</th>
                <th>Best ask last changed</th>
                <th>Best bid last changed</th>
                <th className="mdl-data-table__cell--non-numeric">midprice</th>
            </tr>
        </thead>
        <tbody>
            {this.currencyRows()}
        </tbody>
    </table>
  )}
}

datatable.propTypes = {
    currencyData: PropTypes.array.isRequired,
    updateCurrency: PropTypes.func.isRequired,
    clearDataPoints: PropTypes.func.isRequired
};

export default datatable;
