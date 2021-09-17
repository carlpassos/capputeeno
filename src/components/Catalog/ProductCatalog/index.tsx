import Link from 'next/link'
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

export function ProductCatalog() {

  const [currentPage, setCurrentPage] = useState(1)

  const {data, isLoading, error } = useProducts(currentPage);

  return (
    <>
      {isLoading ? (
        <div>carregando...</div>
      ) : error ? (
        <div>ocorreu um erro</div>
      ) : (
        <>
        <CatalogPagination
          totalCountOfRegisters={data.count}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
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
                  <p>{item.name}</p>
                  <span>{formatPrice(item.price)}</span>
                </div>
              </ProductCard>
            </Link>
          ))}
          </Container>
          <CatalogPagination
            totalCountOfRegisters={data.count}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          /> 
        </>
      )}
    </>
  )
}