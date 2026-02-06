import Header from '../../components/Header'
import Hero from '../../components/Hero'
import RestaurantCard from '../../components/RestaurantCard'
import { Grid, Container } from './styles'

const restaurants = [
  {
    id: 1,
    name: 'La Dolce Vita',
    description:
      'Massas artesanais e molhos clássicos. Entrega rápida e sabor marcante.',
    image:
      'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=1200&q=80&auto=format&fit=crop',
    tags: ['Italiana', 'Destaque']
  },
  {
    id: 2,
    name: 'Sushi House',
    description:
      'Combinados especiais, peixes frescos e opções vegetarianas.',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80&auto=format&fit=crop',
    tags: ['Japonesa']
  },
  {
    id: 3,
    name: 'Burger Club',
    description:
      'Smash burgers, batata crocante e molhos da casa.',
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200&q=80&auto=format&fit=crop',
    tags: ['Hambúrguer', 'Promo']
  }
]

const Home = () => (
  <>
    <Header />
    <Hero
      title="Viva experiências gastronômicas no conforto da sua casa"
      subtitle="Os melhores restaurantes"
    />

    <Container>
      <Grid>
        {restaurants.map((r) => (
          <RestaurantCard key={r.id} {...r} />
        ))}
      </Grid>
    </Container>
  </>
)

export default Home
