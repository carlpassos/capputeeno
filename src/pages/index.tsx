
import { CatalogPagination } from '../components/Catalog/CatalogPagination'
import { ProductCatalog } from '../components/Catalog/ProductCatalog'
import { OrderByMenu } from '../components/Catalog/OrderByMenu'
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
      <ProductCatalog />
    </Container>
  )
}
