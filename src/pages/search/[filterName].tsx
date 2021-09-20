import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { SearchItems } from "../../components/Search/SearchItems"

import {
  Container
} from '../../global/styles/pages/search'
import { useSearch } from "../../services/hooks/useSearch"

export default function SearchPage() {

  
  const router = useRouter()
  const { filterName } = router.query  

  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");

  const {data, isLoading, isFetching, error } = useSearch(currentPage, filter);

  useEffect(() => {
    if(filterName && typeof filterName === 'string') {
      setFilter(filterName)
    }
  },[filterName])

  return (
    <Container>
      <h3>Resultados de pesquisa</h3>
      <span>Resultado da busca: {filterName}...</span>
      <div>
        <SearchItems isFetching={isFetching} isLoading={isLoading} productList={data} />
      </div>
    </Container>
  )
}