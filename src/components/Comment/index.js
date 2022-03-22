import React from 'react';
import styled from 'styled-components';
import StarRating from '../StarRating';
import User from '../User';

const Container = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  max-width: 700px;
  min-width: 300px;

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 146%;
    color: #000000;
    margin-top: 8px;
    margin-bottom: 12px;
    text-align: left;
  }
`;

function Comment({
  id, rating, text, avatarUrl, nickName,
}) {
  return (
    <Container>
      <StarRating rating={rating} id={id} />
      <p>{text}</p>
      <User avatarUrl={avatarUrl} nickName={nickName} />
    </Container>
  );
}

export default Comment;
