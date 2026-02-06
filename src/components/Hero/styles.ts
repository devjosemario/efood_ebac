import styled from 'styled-components'

export const Banner = styled.section`
  background: ${({ theme }) => theme.colors.primary};
  padding: 48px 16px;
`

export const BannerContent = styled.div`
  max-width: ${({ theme }) => theme.container};
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.white};
`

export const Subtitle = styled.p`
  font-weight: 400;
  opacity: 0.9;
  margin-bottom: 8px;
`

export const Title = styled.h2`
  font-size: 34px;
  line-height: 1.1;
  font-weight: 800;
`
