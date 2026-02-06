import { Card, Cover, Infos, Tag, Tags, Title, Desc, ButtonRow } from './styles'
import { Link } from 'react-router-dom'

type Props = {
  id: number
  name: string
  description: string
  image: string
  tags: string[]
}

const RestaurantCard = ({ id, name, description, image, tags }: Props) => (
  <Card>
    <Cover src={image} alt={name} />
    <Infos>
      <Tags>
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </Tags>

      <Title>{name}</Title>
      <Desc>{description}</Desc>

      <ButtonRow>
        <Link to={`/restaurant/${id}`}>Saiba mais</Link>
      </ButtonRow>
    </Infos>
  </Card>
)

export default RestaurantCard
