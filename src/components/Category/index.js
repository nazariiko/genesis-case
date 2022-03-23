import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
  height: 40px;
  cursor: pointer;
  background: ${(props) => (props.active ? '#E6E9F5' : '#FFFFFF')};
  border: ${(props) => (props.active ? '1px solid #0066FF' : '1px solid rgba(0, 0, 0, 0.1)')};
  border-radius: 8px;
  margin-right: 8px;
  margin-bottom: 8px;

  img {
    margin-right: 6px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 146%;
    display: flex;
    align-items: center;
    color: #000000;
  }
`;

function Category({ name, iconUrl, handleAddActiveCategory, handleRemoveActiveCategory, active }) {
  const handleSetActive = () => {
    if (active) {
      handleRemoveActiveCategory(name);
    } else {
      handleAddActiveCategory(name);
    }
  };

  return (
    <Container onClick={handleSetActive} active={active}>
      <img src={iconUrl} alt="icon" />
      <span>{name}</span>
    </Container>
  );
}

export default React.memo(Category);
