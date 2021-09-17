import Link from 'next/link'
import { useRouter } from 'next/router';
import Image from 'next/image'


import {
  Container,
  ProductCard,
} from './styles'

import { formatPrice } from '../../../utils/formatPrice';
import { products } from '../../../utils/products'
import { useQuery } from 'react-query';
import { request, gql } from "graphql-request";
import { useEffect, useState } from 'react';
import { useProducts } from '../../../services/hooks/useProducts';
import { CatalogPagination } from '../CatalogPagination';
import { filterDataProp, orderDataProp } from '../../../pages';
import { CatalogLoad } from '../../Loads/Catalog';


interface ProductCatalogProps {
  filter?: filterDataProp;
  order: orderDataProp;
}

export function ProductCatalog({filter = "all", order = 0}: ProductCatalogProps) {

  const router = useRouter()
  const { page } = router.query

  const [currentPage, setCurrentPage] = useState(page ? Number(page) : 1)
  
  const {data, isLoading, error } = useProducts(currentPage, filter, order);

  function changePage(page: number) {
    if (currentPage !== page) {
      setCurrentPage(page)
      router.push(`?page=${page}`)
    }
  }

  useEffect(() => { 
    if (page && currentPage !== Number(page)){
      setCurrentPage(Number(page))
    }
   }, [page])

  return (
    <>
      {isLoading ? (
        <CatalogLoad />
      ) : error ? (
        <div>ocorreu um erro</div>
      ) : (
        <>
        <CatalogPagination
          totalCountOfRegisters={data.count}
          currentPage={currentPage}
          onPageChange={changePage}
        />
        <Container>
          {data.products.map(item => (
            <Link href={`/product/${item.id}`} key={item.id} passHref>
              <ProductCard >
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={256}
                    height={300}
                    objectFit="cover"
                  />
                <div>
                  <p>{item.name}{item.category}</p>
                  <span>{formatPrice(item.price)}</span>
                </div>
              </ProductCard>
            </Link>
          ))}
          </Container>
          <CatalogPagination
            totalCountOfRegisters={data.count}
            currentPage={currentPage}
            onPageChange={changePage}
          /> 
        </>
      )}
    </>
  )
}