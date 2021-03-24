import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    color: inherit;

    > img {
      max-height: 2.5rem;
    }
  `}
`;
