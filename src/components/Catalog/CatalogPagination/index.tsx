import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import { Container } from './styles'

export function CatalogPagination() {
  return (
    <Container>
      <ul>
        <li className="current">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li className="backArrow"><IoIosArrowBack /></li>
        <li><IoIosArrowForward /></li>
      </ul>
    </Container>
  )
}