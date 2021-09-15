
import { CatalogPagination } from '../components/CatalogPagination'
import { CatalogProducts } from '../components/CatalogProducts'
import { OrderByMenu } from '../components/OrderByMenu'
import {
  Container,
  FilterSection,
  ProductTypeNav,
} from './styles'

export default function Home() {
  return (
    <Container>
      <FilterSection>
        <ProductTypeNav>
          <ul>
            <li className="current">Todos os produtos</li>
            <li>Camisetas</li>
            <li>Canecas</li>
          </ul>
        </ProductTypeNav>
        <OrderByMenu />
      </FilterSection>
      <CatalogPagination />
      <CatalogProducts />
      <CatalogPagination />
    </Container>
  )
}
