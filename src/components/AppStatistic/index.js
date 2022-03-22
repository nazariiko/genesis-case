import React from 'react';
import styled from 'styled-components';
import StarRating from '../StarRating';

const Container = styled.div`
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 45%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;

  p {
    margin-top: 4px;
    font-weight: 400;
    font-size: 14px;
    line-height: 146%;
    color: rgba(0, 0, 0, 0.4);
  }
`;

const Rate = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  span {
    font-weight: 700;
    font-size: 28px;
    line-height: 130%;
    margin-right: 8px;
  }
`;

function AppStatistic({
  rate, ratings, appIcon, id, rateColor,
}) {
  return (
    <Container>
      <Content>
        <Rate>
          <span style={{ color: `${rateColor}` }}>{rate}</span>
          <img src={appIcon} alt="app" />
        </Rate>
        <StarRating rating={rate} id={id} />
        <p>
          {ratings}
          {' '}
          ratings
        </p>
      </Content>
    </Container>
  );
}

export default AppStatistic;
