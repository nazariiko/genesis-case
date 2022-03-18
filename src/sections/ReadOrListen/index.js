import React from 'react';
import styled from 'styled-components';
import ToggleImage from './ToggleImage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 51, 51, 0.1);
  border: 1px solid rgba(255, 51, 51, 0.1);
  border-radius: 12px;
  padding: 25px 25px 0 25px;
  margin-bottom: 70px;

  h2 {
    margin-bottom: 10px;
  }
`;

function ReadOrListen() {
  return (
    <Container>
      <h2>Read or Listen</h2>
      <p>
        Commuting, jogging, or stuck in line? Enjoy the best books in a condensed format.
        Summaries have an audio version, narrated by professional voice actors.
      </p>
      <ToggleImage />
    </Container>
  );
}

export default ReadOrListen;
