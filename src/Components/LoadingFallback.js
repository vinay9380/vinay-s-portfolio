import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${props => props.theme.mode === 'dark' ? '#1a1a1a' : '#ffffff'};
  color: ${props => props.theme.mode === 'dark' ? '#ffffff' : '#1a1a1a'};
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid ${props => props.theme.mode === 'dark' ? '#00ff95' : '#4a90e2'};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 20px;
`;

const LoadingText = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
  opacity: 0.8;
`;

const LoadingFallback = ({ text = 'Loading...' }) => {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>{text}</LoadingText>
    </LoadingContainer>
  );
};

export default LoadingFallback;
