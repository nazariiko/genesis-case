import React from 'react';
import styled from 'styled-components';
import instagram from '../../assets/svg/instagram.svg';

const Container = styled.div`
  display: flex;
  align-items: center;

  .avatar-image {
    margin-right: 8px;
  }

  span {
    margin-right: 4px;
    font-weight: 400;
    font-size: 14px;
    line-height: 146%;
    color: rgba(0, 0, 0, 0.4);
  }
`;

function User({ avatarUrl, nickName }) {
  return (
    <Container>
      <img className="avatar-image" src={avatarUrl} alt="avatar" />
      <span>{nickName}</span>
      <img src={instagram} alt="instagram" />
    </Container>
  );
}

export default User;
