import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/global';

import Header from './components/Header';
import Welcome from './sections/Welcome';
import GetSmarter from './sections/GetSmarter';
import UseSummaries from './sections/UseSummaries';
import ReadOrListen from './sections/ReadOrListen';

const Container = styled.div`
  width: 80%;
  max-width: 1080px;
  padding: 0 20px;
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Welcome />
      <GetSmarter />
      <UseSummaries />
      <ReadOrListen />
    </Container>
  );
}

export default App;
