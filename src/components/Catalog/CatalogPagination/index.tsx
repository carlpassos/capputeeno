import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import { Container } from './styles'

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 5;

function createPagesArray(from: number, to: number) {
  return [...new Array(to - from)]
  .map((_, index) => {
    return from + index + 1;
  })
  .filter(page => page > 0)
}

export function CatalogPagination({
  totalCountOfRegisters,
  registersPerPage = 12,
  currentPage = 1,
  onPageChange
}: PaginationProps) {

  const lastPage = Math.round(totalCountOfRegisters / registersPerPage);
  
  const previousPages = currentPage > 1
    ? createPagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage
    ? createPagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []


  return (
    <Container>
      <ul>

        {currentPage > (1 + siblingsCount) && (
          <>
            <li data-cy="paginationButton1" onClick={() => onPageChange(1)}>1</li>
            {currentPage > (2 + siblingsCount) && <span>...</span>}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => {
          return <li data-cy={`paginationButton${page}`} key={`previouspagekey${page}`} onClick={() => onPageChange(page)}>{page}</li>
        })}
        <li data-cy={`paginationButton${currentPage}`} onClick={() => onPageChange(currentPage)} className="current" >{currentPage}</li>

        {nextPages.length > 0 && nextPages.map(page => {
          return <li data-cy={`paginationButton${page}`} key={`previouspagekey${page}`} onClick={() => onPageChange(page)}>{page}</li>
        })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + 1 + siblingsCount) < lastPage && <span>...</span>}
            <li onClick={() => onPageChange(lastPage)}>{lastPage}</li>
          </>
        )}

        <li onClick={() => {currentPage > 1 && onPageChange(currentPage - 1)}} className="backArrow"><IoIosArrowBack /></li>
        <li onClick={() => {currentPage < lastPage &&onPageChange(currentPage + 1)}}><IoIosArrowForward /></li>
      </ul>
    </Container>
  )
}