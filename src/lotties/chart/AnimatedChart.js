import React from 'react';
import lottie from 'lottie-web';
import styled from 'styled-components';
import chart from './chart.json';

const Container = styled.div`
  height: 272px;
  width: 320px;
  margin-bottom: 30px;
`;

function AnimatedChart() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('.animated-chart'),
      animationData: chart,
      loop: false,
    });
  }, []);
  return (
    <Container className="animated-chart" />
  );
}

export default AnimatedChart;
