import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/global';

import Header from './components/Header';
import Footer from './components/Footer';
import BottomFixedButton from './components/Button/BottomFixedButton';
import Welcome from './sections/Welcome';
import GetSmarter from './sections/GetSmarter';
import UseSummaries from './sections/UseSummaries';
import Categories from './sections/Categories';
import ReadOrListen from './sections/ReadOrListen';
import Comments from './sections/Comments';

const Container = styled.div`
  width: 80%;
  max-width: 1080px;
  padding: 0 20px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 660px) {
    width: 100%;
    padding: 0 10px;
  }
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Welcome />
      <GetSmarter />
      <UseSummaries />
      <Categories />
      <ReadOrListen />
      <Comments />
      <Footer />
      <BottomFixedButton />
    </Container>
  );
}

export default App;
