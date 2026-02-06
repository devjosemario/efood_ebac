import styled from 'styled-components'

export const Container = styled.main`
  max-width: ${({ theme }) => theme.container};
  margin: 0 auto;
  padding: 24px 16px 48px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`
