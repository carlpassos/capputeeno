import Image from 'next/image'
import Link from 'next/link'

import {
  Container,
  ImageSide,
  CartItemContainer,
  CartItemContent,
} from './styles'

import TrashIcon from '../../../../public/trash.svg'
import { formatPrice } from '../../../utils/formatPrice'
import { ProductData } from '../../../services/hooks/useCart'
import { useContext } from 'react'
import { cartContext } from '../../../context/cartContext'
import Skeleton from 'react-loading-skeleton'

const selectOptions = ["selectKey1", "selectKey2", "selectKey3", "selectKey4", "selectKey5","selectKey6","selectKey7","selectKey8","selectKey9","selectKey10"]

interface CartItemsProps {
  isLoading: boolean;
  isFetching: boolean;
  productList: ProductData[]
}

export function CartItems({
  isLoading,
  isFetching,
  productList,
}: CartItemsProps){
  const { removeFromCart, updateCartProduct, cartInfo } = useContext(cartContext)

  return (
    <Container>
      {!productList ?
        <div>Aguardando produtos...</div> :
      <>
        {
          productList.map((item, index) => {

          const productOnCart = cartInfo.products.find(product => product.id === item.id)
          
          if(!productOnCart) return
          
          return (
            <CartItemContainer data-cy={`cartItemContainer${index}`} key={item.name}>
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
                  <><Link href={`/product/${item.id}`} data-cy={`cartItemName${index}`}>{item.name}</Link></>
                }
                
                <div onClick={() => removeFromCart(item.id)}>
                  <TrashIcon data-cy={`cartItemTrash${index}`} />
                </div>
              </div>
              <p>
              {isLoading ?
                <Skeleton count={3} width="100%" />
                :
                <>{item.description}</>
              }
              </p>
              <div>
              {isFetching ?
                <Skeleton width={70} height={40} />
                :
                <div className="qtdSelect">
                  <select data-cy={`cartItemSelect${index}`} value={item.count} name="select" onChange={e => updateCartProduct(item.id, Number(e.currentTarget.value))}>
                    {selectOptions.map((option, index )=> (
                      <option
                        key={option}
                        data-cy={`cartItemSelectOption${index + 1}`}
                        value={index + 1}
                        // selected={(index + 1) === item.count}
                      >
                        {index + 1}
                      </option>
                    ))}
                  </select>
                </div>
              } 
              <span>
                {isFetching ?
                  <Skeleton width={65} />
                  :
                  <>{formatPrice(item.price * item.count)}</>
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