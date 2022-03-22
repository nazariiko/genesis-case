import React from 'react';
import styled from 'styled-components';

import AnimatedChart from '../../lotties/chart/AnimatedChart';
import Button from '../../components/Button';
import discover from '../../assets/img/discover.jpg';

const Container = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  height: 75vh;
  min-height: 550px;
  padding: 25px 100px;
  margin-bottom: 70px;
  position: relative;

  @media (max-width: 1100px) {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 0;
  }

  @media (max-width: 660px) {
    padding-left: 16px;
    padding-right: 16px;
    margin-bottom: 10px;
  }

  h2 {
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 50px;
  }

  & > button {
    @media (max-width: 660px) {
      display: none;
    }
  }

  & > img {
    position: absolute;
    bottom: 0;
    right: 50px;

    @media (max-width: 1100px) {
      margin-top: 24px;
      position: relative;
      right: 0;
      height: 304px;
    }

    @media (max-width: 660px) {
      height: 280px;
    }
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
