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
import { useEffect } from 'react';
import { useProducts } from '../../../services/hooks/useProducts';
import { CatalogPagination } from '../CatalogPagination';

export function ProductCatalog() {

  const {data, isLoading, error } = useProducts(2);

  return (
    <>
    <CatalogPagination />
    <Container>
      {isLoading ? (
        <div>carregando...</div>
      ) : error ? (
        <div>ocorreu um erro</div>
      ) : (
        <>
        {data.allProducts.map(item => (
          <Link href={`/product/${item.id}`} key={item.id} passHref>
            <ProductCard >
                <Image
                  src={item.image_url}
                  alt={item.name}
                  width={256}
                  height={300}
                  objectFit="cover"
                />
              <div>
                <p>{item.name}</p>
                <span>{formatPrice(item.price_in_cents / 100)}</span>
              </div>
            </ProductCard>
          </Link>
        ))}
        </>
      )}
      
    </Container>
    <CatalogPagination />
    </>
  )
}