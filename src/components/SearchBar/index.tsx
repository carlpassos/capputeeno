import SearchLoupe from '../../../public/search-loupe.svg'

import {
  Container,
} from './styles'

export function SearchBar() {
  return (
    <form>
      <Container>
        <input placeholder="Procurando por algo específico?" />
        <button>
          <SearchLoupe />
        </button>
      </Container>
    </form>
  )
}