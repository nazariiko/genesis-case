import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/svg/logo.svg';

const LogoIcon = styled.img`
  cursor: pointer;
  height: 30px;
`;

function Logo() {
  return (
    <LogoIcon src={logo} />
  );
}

export default Logo;
