import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo';
import facebook from '../../assets/svg/facebook.svg';
import twitter from '../../assets/svg/twitter.svg';
import instagram from '../../assets/svg/instagram1.svg';

const Container = styled.div`
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > h2 {
    margin: 20px 0;
    text-align: left;
  }
`;

const SocialMedia = styled.div`
  & > p {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #000000;
    margin-bottom: 8px;
  }

  div {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      cursor: pointer;
    }
  }
`;

function Footer() {
  return (
    <Container>
      <Logo />
      <h2>Empower yourself with the best books insights</h2>
      <SocialMedia>
        <p>Social media:</p>
        <div>
          <img src={facebook} alt="social" />
          <img src={instagram} alt="social" />
          <img src={twitter} alt="social" />
        </div>
      </SocialMedia>
    </Container>
  );
}

export default Footer;
