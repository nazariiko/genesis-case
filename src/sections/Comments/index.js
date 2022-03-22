import React from 'react';
import styled from 'styled-components';
import Comment from '../../components/Comment';
import AppStatistic from '../../components/AppStatistic';

import comments from '../../data/mockComments';
import appsStatistic from '../../data/mockAppsStatistic';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e6e9f5;
  border: 1px solid rgba(0, 102, 255, 0.2);
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 70px;

  @media (max-width: 660px) {
    padding-left: 16px;
    padding-right: 16px;
    margin-bottom: 10px;
  }

  & > h2 {
    margin-bottom: 10px;
  }

  & > p {
    margin-bottom: 24px;

    span {
      color: #0066ff;
    }
  }
`;

const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  & > div {
    margin-bottom: 20px;
  }
`;

const AppsStatisticContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

function Comments() {
  return (
    <Container>
      <h2>People love the Headway app</h2>
      <p>
        Become a member of our global community of
        <span> 7 million people</span>
      </p>
      <CommentContainer>
        {comments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </CommentContainer>
      <AppsStatisticContainer>
        {appsStatistic.map((app) => (
          <AppStatistic key={app.id} {...app} />
        ))}
      </AppsStatisticContainer>
    </Container>
  );
}

export default Comments;
