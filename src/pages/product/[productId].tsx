import { useRouter } from 'next/router';
import Image from 'next/image';
import { BackButton } from '../../components/BackButton';
import { formatPrice } from '../../utils/formatPrice';
import { useProduct } from '../../services/hooks/useProduct';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import ShoppingBag from '../../../public/shopping-bag.svg'

import {
  Container,
  Content,
  ProductContent,
  ProductHeader,
  Description,
  AddToCartButton,
} from '../../global/styles/pages/product'
import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';

const productImageLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 75}`
}

export default function Product() {
  const router = useRouter()
  const { productId } = router.query

  const {data, isLoading, error, isFetching } = useProduct(String(productId));

  const { addToCart } = useContext(cartContext)

  function addProductToCart(id: string) {
    addToCart(id);
  }

  return (
    <Container>
      <SkeletonTheme color="#d7d7d7" highlightColor="#e1e1e1">
        <BackButton />
        {error ?
          <div style={{marginTop: "30px"}}>
            Desculpe, não foi possível encontrar o produto
          </div>:
          <Content>
            {isLoading ?
              <Skeleton width={640} height={580} /> :
              <Image
                    src={data.imageUrl}
                    alt="Caneca de cerâmica rústica"
                    width={640}
                    height={580}
                    objectFit="cover"
                  />
            }
            <ProductContent>
              <ProductHeader>
                <span>
                  {isLoading ?
                    <Skeleton width={200}  /> :
                    data.category
                  }
                  
                </span>
                <h2>
                  {isLoading ?
                    <Skeleton width={350} /> :
                    data.name
                  }
                </h2>
                <div>
                  <span>
                    {isLoading ?
                      <Skeleton width={100} height={15} /> :
                      formatPrice(data.price)
                    }
                    
                  </span>
                  <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
                </div>
              </ProductHeader>
              
              <Description>
                <h3>Descrição</h3>
                <p>
                    {isLoading ?
                      <Skeleton count={3} /> :
                      data.description
                    }
                </p>
              </Description>
              
              {isLoading || isFetching ?
                <Skeleton height={40} /> :
                <AddToCartButton onClick={() => addProductToCart(data.id)}>
                  <ShoppingBag />
                  Adicionar ao carrinho
                </AddToCartButton>
              }
              
            </ProductContent>
          </Content>
          }
      </SkeletonTheme>
    </Container>
  )
}