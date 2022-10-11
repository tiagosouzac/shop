import { Container } from './styles'
import logoImg from '../../assets/logo.svg'
import Image from 'next/future/image'

export function Header() {
  return (
    <Container>
      <Image src={logoImg} alt="" />
    </Container>
  )
}
