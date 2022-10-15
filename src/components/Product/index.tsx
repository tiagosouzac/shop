import Link from 'next/link'
import Image from 'next/future/image'

import { Container } from './styles'

type Props = {
  product: {
    id: string
    name: string
    imageUrl: string
    url: string
    price: string
  }
}

export function Product({ product }: Props) {
  return (
    <Link href={`/product/${product.id}`} prefetch={false}>
      <Container className="keen-slider__slide">
        <Image src={product.imageUrl} width={520} height={480} alt="" />

        <footer>
          <strong>{product.name}</strong>
          <span>{product.price}</span>
        </footer>
      </Container>
    </Link>
  )
}
