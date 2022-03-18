import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: block;
  height: 56px;
  width: ${(props) => props.width};
  background: #0066FF;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: #FFFFFF;
  cursor: pointer;
`;

function Button({ text, width }) {
  return (
    <StyledButton width={width}>{text}</StyledButton>
  );
}

export default Button;
