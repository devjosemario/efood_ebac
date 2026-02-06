import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import { Container, Banner } from './styles'

const Restaurant = () => {
  const { id } = useParams()

  return (
    <>
      <Header />
      <Banner>
        <div>
          <p>Restaurante</p>
          <h2>Detalhes do restaurante #{id}</h2>
        </div>
      </Banner>

      <Container>
        <h3>Cardápio (em breve)</h3>
        <p>Aqui você vai colocar os produtos/pratos igual ao Figma.</p>
      </Container>
    </>
  )
}

export default Restaurant
