import styled from 'styled-components'

export const Banner = styled.section`
  background: #111;
  color: #fff;
  padding: 40px 16px;

  > div {
    max-width: ${({ theme }) => theme.container};
    margin: 0 auto;
  }

  p {
    opacity: 0.85;
    margin-bottom: 8px;
  }

  h2 {
    font-size: 28px;
  }
`

export const Container = styled.main`
  max-width: ${({ theme }) => theme.container};
  margin: 0 auto;
  padding: 24px 16px 48px;
`
