import React from 'react';
import styled from 'styled-components';

import reviewers from '../../assets/svg/reviewers.svg';
import insights from '../../assets/svg/insights.svg';
import builtHabit from '../../assets/svg/built-habit.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #E6F2E7;
  border: 1px solid rgba(0, 187, 119, 0.4);
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 70px;


  h2 {
    margin-bottom: 25px;
  }

  h3 {
    margin-bottom: 10px;
  }

  .reviewers-image {
    height: 230px;
    margin-bottom: 10px;
  }

  .insights-image {
    margin-top: 30px;
    margin-bottom: 10px;
  }

  .builtHabit-image {
    margin-top: 30px;
    margin-bottom: 10px;
  }
`;

function GetSmarter() {
  return (
    <Container>
      <h2>Get smarter with the least effort</h2>
      <img className="reviewers-image" src={reviewers} alt="reviewers" />
      <h3>Learn from the best</h3>
      <p>Highlighted by top reviewers, we picked only the most outstanding bestsellers for you.</p>
      <img className="insights-image" src={insights} alt="insights" />
      <h3>Get key insights</h3>
      <p>Major ideas in a bite-sized form. Long reads no more!</p>
      <img className="builtHabit-image" src={builtHabit} alt="builtHabit" />
      <h3>Build a reading habit</h3>
      <p>
        Consistency is the key to top performance.
        Only 15 minutes per day to make reading your brand new habit!
      </p>
    </Container>
  );
}

export default GetSmarter;
