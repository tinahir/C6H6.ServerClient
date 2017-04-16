import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Sparkline from '../../../site/sparkline';

class SparklineChart extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  
  draw(){
    const sparkElement = ReactDOM.findDOMNode(this.refs[this.props.name]);
    Sparkline.draw(sparkElement, this.props.data);
  }

  componentDidMount(){
    this.draw();
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
};

export default SparklineChart;