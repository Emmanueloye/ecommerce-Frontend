import styled, { css } from 'styled-components';

const Container = styled.div<{ type?: string }>`
  max-width: 90%;
  margin: 0 auto;

  ${(props) =>
    props.type === 'relative' &&
    css`
      position: relative;
    `}

  @media screen and (min-width: 1200px) {
    max-width: 1150px;
  }
  @media screen and (min-width: 1400px) {
    max-width: 1200px;
  }
  @media screen and (min-width: 1600px) {
    max-width: 1300px;
  }
`;

export default Container;
