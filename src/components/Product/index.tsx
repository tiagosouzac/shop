import Image from 'next/future/image'

import { Container } from './styles'

type Props = {
  image: string
  name: string
  price: number
}

export function Product({ image, name, price }: Props) {
  return (
    <Container className="keen-slider__slide">
      <Image src={image} width={520} height={480} alt="" />

      <footer>
        <strong>{name}</strong>
        <span>{price}</span>
      </footer>
    </Container>
  )
}
