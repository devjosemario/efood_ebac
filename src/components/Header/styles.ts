import styled from 'styled-components'

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 24px 16px;
`

export const Top = styled.div`
  max-width: ${({ theme }) => theme.container};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  a {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const Logo = styled.h1`
  font-size: 28px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: lowercase;
`
