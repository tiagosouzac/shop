import { GetServerSideProps } from 'next'
import Stripe from 'stripe'
import { stripe } from '../lib/stripe'
import { Product } from '../components/Product'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { Container } from '../styles/pages/home'

type Props = {
  products: {
    id: string
    name: string
    imageUrl: string
    url: string
    price: number
  }[]
}

export default function Home({ products }: Props) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <Container ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.imageUrl}
          name={product.name}
          price={product.price}
        />
      ))}
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount! / 100,
    }
  })

  return {
    props: {
      products,
    },
  }
}
