import { useRouter } from 'next/router'

import BackArrow from '../../../public/back.svg'

import {
  Container
} from './styles'

export function BackButton() {
  const router = useRouter()

  return(
    <Container type='button' onClick={() => router.back()}>
      <BackArrow />
      Voltar
    </Container>
  )
}