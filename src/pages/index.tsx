import { Product } from '../components/Product'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { Container } from '../styles/pages/home'
import shirt1 from '../assets/shirts/1.png'
import shirt2 from '../assets/shirts/2.png'
import shirt3 from '../assets/shirts/3.png'
import shirt4 from '../assets/shirts/4.png'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <Container ref={sliderRef} className="keen-slider">
      <Product image={shirt1} name="Camiseta X" price={79.9} />
      <Product image={shirt2} name="Camiseta X" price={79.9} />
      <Product image={shirt3} name="Camiseta X" price={79.9} />
      <Product image={shirt4} name="Camiseta X" price={79.9} />
    </Container>
  )
}
