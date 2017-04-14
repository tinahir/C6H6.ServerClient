import React from 'react';

const SparklineChart = () => {

    const sparks = document.createElement('span')
    Sparkline.draw(sparks, [1, 2, 3, 4]);

  return (
    <span></span>
  );
};

export default SparklineChart;
