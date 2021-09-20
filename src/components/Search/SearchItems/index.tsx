import Image from 'next/image'
import Link from 'next/link'

import {
  Container,
  ImageSide,
  CartItemContainer,
  CartItemContent,
} from './styles'

import { formatPrice } from '../../../utils/formatPrice'
import { ProductData } from '../../../services/hooks/useSearch'
import Skeleton from 'react-loading-skeleton'

interface CartItemsProps {
  isLoading: boolean;
  isFetching: boolean;
  productList: ProductData[]
}

export function SearchItems({
  isLoading,
  isFetching,
  productList,
}: CartItemsProps){


  return (
    <Container>
      {!productList ?
        <div>Você deve buscar por um produto</div> :
      <>
        {
          productList.length < 1 ?
          <div style={{marginTop: "20px", fontSize: "20px"}}>
            Nenhum produto encontrado {':('}
          </div> :
          productList.map(item => {
          return (
            <CartItemContainer key={item.name}>
            <ImageSide>
            {isLoading ?
              <Skeleton width={256} height={211} />
              :
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={356}
                height={211}
                objectFit="cover"
              />
            }
            
            </ImageSide>
            <CartItemContent>
              <div>
                {isLoading ?
                  <Skeleton width={200} />
                  :
                  <><Link href={`/product/${item.id}`}>{item.name}</Link></>
                }
              </div>
              <p>
              {isLoading ?
                <Skeleton count={3} width="100%" />
                :
                <>{item.description}</>
              }
              </p>
              <div>
              <span>
                {isFetching ?
                  <Skeleton width={65} />
                  :
                  <>{formatPrice(item.price)}</>
                }
                
              </span>
              </div>
            </CartItemContent>
            
          </CartItemContainer>
          )
        })}
      </>
      }
    </Container>
  )
}