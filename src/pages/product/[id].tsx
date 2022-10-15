import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/future/image'
import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'
import {
  Container,
  ImageContainer,
  ProductDetails,
} from '../../styles/pages/product'

type Props = {
  product: {
    id: string
    name: string
    description: string
    imageUrl: string
    url: string
    price: string
  }
}

export default function Product({ product }: Props) {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={520}
          height={480}
        />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount! / 100),
      },
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
