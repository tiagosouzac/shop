import {
  Container,
  ImageContainer,
  ProductDetails,
} from '../../styles/pages/product'

export default function Product() {
  return (
    <Container>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          eveniet deleniti asperiores rerum repellat tempore itaque tempora
          adipisci, sequi dolore modi vel, nulla unde officia? Reprehenderit
          dignissimos quas voluptate esse? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Beatae laboriosam iusto voluptas
          accusamus quae, repellat aut corrupti ipsa est quo. Maiores fugiat
          dicta tempora mollitia facilis eius totam quasi vitae?
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </Container>
  )
}
