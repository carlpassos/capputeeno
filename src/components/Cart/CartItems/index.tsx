import Image from 'next/image'

import {
  Container,
  ImageSide,
  CartItemContainer,
  CartItemContent,
} from './styles'

import TrashIcon from '../../../../public/trash.svg'
import { formatPrice } from '../../../utils/formatPrice'

const productImageLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 75}`
}

const cartItems = [
  {name: 'nome do item 1'},
  {name: 'nome do item 2'},
  {name: 'nome do item 3'},
  {name: 'nome do item 4'},
]

export function CartItems(){
  return (
    <Container>
      {cartItems.map(item => (
        <CartItemContainer key={item.name}>
          <ImageSide>
          <Image
              loader={productImageLoader}
              src="products/canecas/caneca_01.jpg"
              alt={item.name}
              width={356}
              height={211}
              objectFit="cover"
            />
          </ImageSide>
          <CartItemContent>
            <div>
              Caneca de cerâmica rústica
              <TrashIcon />
            </div>
            <p>
              Aqui vem um texto descritivo do produto, esta caixa de texto servirá
              apenas de exemplo para que simule algum texto que venha a ser inserido
              nesse campo, descrevendo tal produto.
            </p>
            <div>
            <div className="qtdSelect">
              <select name="select">
                <option value="valor1">1</option>
                <option value="valor2" selected>1</option>
                <option value="valor3">1</option>
              </select>
            </div>
            <span>{formatPrice(40)}</span>
            </div>
          </CartItemContent>
           
        </CartItemContainer>
      ))}
    </Container>
  )
}