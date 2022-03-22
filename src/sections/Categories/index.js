import React from 'react';
import styled from 'styled-components';
import CategoriesAndBooks from './CategoriesAndBooks';

const Container = styled.div`
  background: rgba(122, 0, 218, 0.1);
  border: 1px solid rgba(122, 0, 218, 0.1);
  border-radius: 12px;
  padding: 20px 0;
  margin-bottom: 70px;

  @media (max-width: 660px) {
    margin-bottom: 10px;
  }

  & > h2 {
    margin-bottom: 8px;
    padding: 0 20px;
  }

  p {
    padding: 0 20px;
  }
`;

function Categories() {
  return (
    <Container>
      <h2>Determine your goal and go ahead!</h2>
      <p>
        Learn something new every day from Self-Growth, Happiness, Money, Health, and many other
        categories. Benefit from unlimited access to world best thoughts.
      </p>
      <CategoriesAndBooks />
    </Container>
  );
}

export default Categories;
