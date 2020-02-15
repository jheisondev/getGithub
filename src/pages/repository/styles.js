import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div``;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const Loading = styled.div`
  background: #161616;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  ${props =>
    props.loading &&
    css`
      svg {
        margin-left: 10px;
        animation: ${rotate} 1s linear infinite;
      }
    `}
`;

// export const Container = styled.div``;

// export const Container = styled.div``;
