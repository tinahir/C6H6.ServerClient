import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Sparkline from '../../../site/sparkline';
import _ from 'lodash';

class SparklineChart extends React.Component {
  constructor(props) {
    super(props);
  }
  
  draw(){
    const sparkElement = ReactDOM.findDOMNode(this.refs[this.props.name]);
    Sparkline.draw(sparkElement, this.dataToPoints());
  }

  dataToPoints(){
    return this.props.data;
  }

  componentDidMount(){
    if (this.props.clearInterval && this.props.clearInterval > 0){
        this.timerID = setInterval(
          () => this.clearDataPoints(),
          (this.props.clearInterval * 1000)
        );
    }
    
    this.draw();
  }

  clearDataPoints() {
    this.props.clearDataPoints(this.props.name);
  }

  componentWillUnmount() {
     if (this.props.clearInterval && this.props.clearInterval > 0){
        clearInterval(this.timerID);
     }
  }

  componentDidUpdate(){
    this.draw();
  }

  render() {
    return (
      <span ref={this.props.name}></span>
   )}
}

SparklineChart.propTypes = {
    data: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    clearInterval: PropTypes.number.isRequired,
    clearDataPoints: PropTypes.func.isRequired
};

export default SparklineChart;