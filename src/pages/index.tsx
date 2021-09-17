
import { CatalogPagination } from '../components/Catalog/CatalogPagination'
import { ProductCatalog } from '../components/Catalog/ProductCatalog'
import { OrderByMenu } from '../components/Catalog/OrderByMenu'
import {
  Container,
  FilterSection,
  ProductTypeNav,
} from './styles'
import { useState } from 'react'
import { useRouter } from 'next/router'

export type filterDataProp = "mugs" | "t-shirts" | "all"

interface filterMenuOptionProps {
  category: filterDataProp;
  name: string;
}

const filterMenuOptions: filterMenuOptionProps[] = [
  {category: "all", name: "Todos os Produtos"},
  {category: "t-shirts", name: "Camisetas"},
  {category: "mugs", name: "Canecas"},
]

export default function Home() {

  const router = useRouter()

  const [filterOption, setFilterOption] = useState<filterDataProp>("all")

  function changeFilter(category: filterDataProp) {
    setFilterOption(category)
    router.push('?page=1')
  }

  return (
    <Container>
      <FilterSection>
        <ProductTypeNav>
          <ul>
            {filterMenuOptions.map(item => {
              const response = item.category === filterOption
            ? <li key={item.category} onClick={() => changeFilter(item.category)} className="current">{item.name}</li>
            : <li key={item.category} onClick={() => changeFilter(item.category)}>{item.name}</li>

            return response
            })}
          </ul>
        </ProductTypeNav>
        <OrderByMenu />
      </FilterSection>
      <ProductCatalog filter={filterOption}/>
    </Container>
  )
}
