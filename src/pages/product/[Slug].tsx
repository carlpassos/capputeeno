import Image from 'next/image';
import { BackButton } from '../../components/BackButton';
import { formatPrice } from '../../utils/formatPrice';

import ShoppingBag from '../../../public/shopping-bag.svg'

import {
  Container,
  Content,
  ProductContent,
  ProductHeader,
  Description,
  AddToCartButton,

} from './styles'

const productImageLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 75}`
}

export default function Product() {
  return (
    <Container>
      <BackButton />
      <Content>
        <Image
              loader={productImageLoader}
              src="products/canecas/caneca_01.jpg"
              alt="Caneca de cerâmica rústica"
              width={640}
              height={580}
              objectFit="cover"
            />
        <ProductContent>
          <ProductHeader>
            <span>Caneca</span>
            <div>
              <h2>Caneca de cerâmica rústica</h2>
              <span>{formatPrice(40)}</span>
              <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
            </div>
          </ProductHeader>
          
          <Description>
            <h3>Descrição</h3>
            <p>
              Aqui vem um texto descritivo do produto, esta caixa de texto servirá
              apenas de exemplo para que simule algum texto que venha a ser inserido
              nesse campo, descrevendo tal produto.
            </p>
          </Description>
          

          <AddToCartButton>
            <ShoppingBag />
            Adicionar ao carrinho
          </AddToCartButton>
        </ProductContent>
      </Content>
    </Container>
  )
}