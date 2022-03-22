import React from 'react';
import styled from 'styled-components';
import Button from '.';

const FixedButtonContainer = styled.div`
  display: none;
  position: fixed;
  bottom: 20px;
  width: calc(100% - 20px);
  justify-content: center;

  @media (max-width: 660px) {
    display: flex;
  }
`;

function BottomFixedButton() {
  return (
    <FixedButtonContainer>
      <Button text="Get Started" width="320px" />
    </FixedButtonContainer>
  );
}

export default BottomFixedButton;
