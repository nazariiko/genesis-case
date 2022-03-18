import React from 'react';
import styled from 'styled-components';

import book from '../../assets/svg/book.svg';
import vlDivider from '../../assets/svg/vl-divider.svg';
import arrowDivider from '../../assets/svg/arrow-divider.svg';
import iphoneBook from '../../assets/svg/iphone-book.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FFEDE1;
  border: 1px solid rgba(255, 136, 51, 0.2);
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 70px;

  h2 {
    margin-bottom: 10px;
  }

  span {
    color: rgba(0, 0, 0, 0.4);
  }

  .book-image {
    margin-top: 25px;
    margin-bottom: 10px;
  }

  .iphoneBook-image {
    margin-bottom: 10px;
  }

  .divider {
    margin: 10px 0;
  }
`;

function UseSummaries() {
  return (
    <Container>
      <h2>Summary is the new black</h2>
      <p>
        Use summaries: comprehensive 15-min abstracts from nonfiction books
        with the main concepts and recommendations.
      </p>
      <img className="book-image" src={book} alt="book" />
      <p>Typical book</p>
      <span>320 pages ~ 20 hours</span>
      <img className="divider" src={vlDivider} alt="vlDivider" />
      <p>Key ideas & insights</p>
      <img className="divider" src={arrowDivider} alt="arrowDivider" />
      <img className="iphoneBook-image" src={iphoneBook} alt="iphoneBook" />
      <p>Summary</p>
      <span>~ 15 minutes</span>
    </Container>
  );
}

export default UseSummaries;
