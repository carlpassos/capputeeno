import Image from 'next/image';
import { BackButton } from '../../components/BackButton';

import {
  Container,
  Content,
} from './styles'

export default function Product() {
  return (
    <Container>
      <BackButton />
      <Content>
        {/* <Image */}
      </Content>
    </Container>
  )
}