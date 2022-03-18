import React from 'react';
import styled, { css } from 'styled-components';

import Logo from '../Logo';

import userpic from '../../assets/svg/userpic.svg';
import menu from '../../assets/svg/menu.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 5px;
  margin-bottom: 50px;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

const navigationButton = css`
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  cursor: pointer;
`;

const UserInfoButton = styled.button`
  ${navigationButton}
`;

const MenuButton = styled.button`
  margin-left: 8px;
  ${navigationButton}
`;

function Header() {
  return (
    <Container>
      <Logo />
      <Navigation>
        <UserInfoButton>
          <img src={userpic} alt="user" />
        </UserInfoButton>
        <MenuButton>
          <img src={menu} alt="burger-menu" />
        </MenuButton>
      </Navigation>
    </Container>
  );
}

export default Header;
