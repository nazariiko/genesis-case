import React from 'react';
import styled from 'styled-components';

import AnimatedChart from '../../lotties/chart/AnimatedChart';
import Button from '../../components/Button';
import discover from '../../assets/img/discover.jpg';

const Container = styled.div`
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  height: 75vh;
  min-height: 550px;
  padding: 25px 100px;
  margin-bottom: 70px;
  position: relative;

  h2 {
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 50px;
  }

  img {
    position: absolute;
    bottom: 0;
    right: 50px;
  }
`;

function Welcome() {
  return (
    <Container>
      <h2>Become a better you</h2>
      <p>with 15-min bite-sized reads and audios of the world’s best nonfiction books</p>
      <AnimatedChart />
      <Button text="Get Started" width="320px" />
      <img src={discover} alt="discover" />
    </Container>
  );
}

export default Welcome;
