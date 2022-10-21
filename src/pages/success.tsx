import Link from 'next/link'
import { Container, ImageContainer } from '../styles/pages/success'

export default function Success() {
  return (
    <Container>
      <h1>Compra efetuada!</h1>

      <ImageContainer></ImageContainer>

      <p>
        Uhuul <strong>Tiago Castro</strong>! Sua{' '}
        <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua
        casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </Container>
  )
}
