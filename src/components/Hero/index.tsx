import { Banner, BannerContent, Title, Subtitle } from './styles'

type Props = {
  title: string
  subtitle: string
}

const Hero = ({ title, subtitle }: Props) => (
  <Banner>
    <BannerContent>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
    </BannerContent>
  </Banner>
)

export default Hero
