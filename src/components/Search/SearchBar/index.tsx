import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import SearchLoupe from '../../../../public/search-loupe.svg'

import {
  Container,
} from './styles'



export function SearchBar() {

  const router = useRouter()

  const [searchInputValue, setSearchInputvalue] = useState("")

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    router.push(`/search/${searchInputValue}`)
  }, [router, searchInputValue])

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <input
          data-cy="searchInput"
          value={searchInputValue}
          placeholder="Procurando por algo específico?"
          onChange={e => setSearchInputvalue(e.currentTarget.value)}
        />
        <button data-cy="searchButton"  type="submit" aria-label="Botão de busca">
          <SearchLoupe />
        </button>
      </Container>
    </form>
  )
}