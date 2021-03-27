import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    display: flex;
    align-items: center;
    color: inherit;

    > img {
      height: 2.5rem;
    }
  `}
`;
