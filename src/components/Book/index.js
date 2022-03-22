import React from 'react';
import styled from 'styled-components';

const BookImage = styled.img`
  border-radius: 8px;
  height: 108px;
  filter: ${(props) => (props.active ? 'none' : 'grayscale(100%)')};
  margin: 0 6px;
`;

function Book({ imagePath, active }) {
  return <BookImage src={imagePath} alt="book" active={active} />;
}

export default Book;
