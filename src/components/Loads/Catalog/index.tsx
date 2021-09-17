import Skeleton from 'react-loading-skeleton'

import {
  Container,
  FakeCatalogPagination,
  ProductCard
} from './styles'

const products = [
  "keyLoadProduct1",
  "keyLoadProduct2",
  "keyLoadProduct3",
  "keyLoadProduct4",
  "keyLoadProduct5",
  "keyLoadProduct6",
  "keyLoadProduct7",
  "keyLoadProduct8",
  "keyLoadProduct9",
  "keyLoadProduct10",
  "keyLoadProduct11",
  "keyLoadProduct12",

]

export function CatalogLoad() {
  return (
    <>
        <FakeCatalogPagination>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
        </FakeCatalogPagination>
        <Container>
          {products.map(item => (
              <ProductCard key={item}>
                <Skeleton width="270px" height="300px"/>
                <div>
                  <p><Skeleton width="210px" /></p>
                  <span><Skeleton width="120px" /></span>
                </div>
              </ProductCard>
          ))}
          </Container>
          <FakeCatalogPagination>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
          </FakeCatalogPagination>
        </>
  )
}