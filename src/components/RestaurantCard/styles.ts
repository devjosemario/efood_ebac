import styled from 'styled-components'

export const Card = styled.article`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
`

export const Cover = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
`

export const Infos = styled.div`
  padding: 16px;
`

export const Tags = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`

export const Tag = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 999px;
`

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`

export const Desc = styled.p`
  font-size: 14px;
  line-height: 1.5;
  opacity: 0.85;
`

export const ButtonRow = styled.div`
  margin-top: 14px;

  a {
    display: inline-block;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    padding: 8px 12px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 14px;
  }
`
