import { Container, Logo, Top } from './styles'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <Container>
      <Top>
        {!isHome && <Link to="/">← Restaurantes</Link>}
        <Logo>efood</Logo>
        <div style={{ width: 110 }} />
      </Top>
    </Container>
  )
}

export default Header
