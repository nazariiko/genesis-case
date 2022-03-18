import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import listenImage from '../../assets/img/listen.png';
import readImage from '../../assets/img/read.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;

  & > img {
    height: 304px;
  }
`;

const ToggleBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  span {
    color: rgba(0, 0, 0, 0.4);
  }

  span.active {
    color: #000000;
  }
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 116px;
  height: 56px;
  background: #FFFFFF;
  border-radius: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0 12px;
  cursor: pointer;
  position: relative;

  svg {
    z-index: 10;

    path {
      fill: black;
      transition: all 0.3s ease-in-out;
    }
  }

  svg.active {
    path {
      fill: white;
    }
  }

  .audio-icon {
    margin-left: 14px;
  }

  .text-icon {
    margin-right: 14px;
  }

  .toggle-switch {
    width: 48px;
    height: 48px;
    position: absolute;
    background: #0066FF;
    border-radius: 40px;
    top: 3px;
    left: ${(props) => (props.state === 'listen' ? '3px' : '63px')};
    transition: all 0.3s ease-in-out;
  }
`;

function ToggleImage() {
  const [toggleState, setToggleState] = React.useState('listen');

  const handleToggle = () => {
    const newState = toggleState === 'read' ? 'listen' : 'read';
    setToggleState(newState);
  };

  return (
    <Container>
      <ToggleBlock>
        <span className={toggleState === 'listen' ? 'active' : ''}>Listen</span>
        <ToggleButton state={toggleState} onClick={handleToggle}>
          <svg className={classNames('audio-icon', { active: toggleState === 'listen' })} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.50006 14.2819V17.7181C8.50006 18.1638 8.45364 18.3255 8.36649 18.4884C8.27934 18.6514 8.15144 18.7793 7.98848 18.8664C7.82552 18.9536 7.66387 19 7.21811 19H5.50006C3.8432 19 2.50006 17.6569 2.50006 16C2.50006 14.6938 3.33486 13.5825 4.50006 13.1707V11C4.50006 6.58172 8.08178 3 12.5001 3C16.9183 3 20.5001 6.58172 20.5001 11V13.1707C21.6652 13.5825 22.5001 14.6938 22.5001 16C22.5001 17.6569 21.1569 19 19.5001 19H17.782C17.3362 19 17.1746 18.9536 17.0116 18.8664C16.8487 18.7793 16.7208 18.6514 16.6336 18.4884C16.5465 18.3255 16.5001 18.1638 16.5001 17.7181V14.2819C16.5001 13.8362 16.5465 13.6745 16.6336 13.5116C16.7208 13.3486 16.8487 13.2207 17.0116 13.1336C17.1746 13.0464 17.3362 13 17.782 13H18.5001V11C18.5001 7.68629 15.8138 5 12.5001 5C9.18635 5 6.50006 7.68629 6.50006 11V13H7.21811C7.66387 13 7.82552 13.0464 7.98848 13.1336C8.15144 13.2207 8.27934 13.3486 8.36649 13.5116C8.45364 13.6745 8.50006 13.8362 8.50006 14.2819Z" fill="white" />
          </svg>
          <svg className={classNames('text-icon', { active: toggleState === 'read' })} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.49994 10C4.49994 9.44772 4.94766 9 5.49994 9H15.4999C16.0522 9 16.4999 9.44772 16.4999 10C16.4999 10.5523 16.0522 11 15.4999 11H5.49994C4.94766 11 4.49994 10.5523 4.49994 10ZM4.49994 6C4.49994 5.44772 4.94766 5 5.49994 5H19.4999C20.0522 5 20.4999 5.44772 20.4999 6C20.4999 6.55228 20.0522 7 19.4999 7H5.49994C4.94766 7 4.49994 6.55228 4.49994 6ZM4.49994 14C4.49994 13.4477 4.94766 13 5.49994 13H19.4999C20.0522 13 20.4999 13.4477 20.4999 14C20.4999 14.5523 20.0522 15 19.4999 15H5.49994C4.94766 15 4.49994 14.5523 4.49994 14ZM4.49994 18C4.49994 17.4477 4.94766 17 5.49994 17H12.4999C13.0522 17 13.4999 17.4477 13.4999 18C13.4999 18.5523 13.0522 19 12.4999 19H5.49994C4.94766 19 4.49994 18.5523 4.49994 18Z" fill="black" />
          </svg>
          <div className="toggle-switch" />
        </ToggleButton>
        <span className={toggleState === 'read' ? 'active' : ''}>Read</span>
      </ToggleBlock>
      <img src={toggleState === 'listen' ? listenImage : readImage} alt="player" />
    </Container>
  );
}

export default ToggleImage;
