
import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { BackButton } from '../../components/BackButton'
import { CartItems } from '../../components/Cart/CartItems'
import { cartContext } from '../../context/cartContext'
import { useCart } from '../../services/hooks/useCart'
import { formatPrice } from '../../utils/formatPrice'
import {
  Container,
  CartContent,
  Resume,
  ResumeInfo,
  ResumeTotal,
  BuyButton,
  HelpMenu,
} from '../../global/styles/pages/cart'

export default function Cart() {

  const { cartInfo } = useContext(cartContext)

  const {data, isLoading, error, isFetching, refetch} = useCart(cartInfo)

  const [productList, setProductList] = useState(data)
  const [totalProductsPrice, setTotalProductsPrice] = useState(0)

  useEffect(() => {
    refetch()
    setProductList(data)
    const totalPrice = data?.reduce((total, product) => {
      return total + (product.price * product.count);
    }, 0)

    console.log(totalPrice)

    setTotalProductsPrice(totalPrice)

  }, [data, cartInfo, refetch]) 
  

  return (
    <>
    <Head>
      <title>Capputeeno - carrinho</title>
    </Head>
    <Container>
      {error || cartInfo.products.length === 0 ?
        <CartContent>
          <BackButton />
          <h2>Carrinho</h2>
          <p>{'O seu carrinho está vazio :('}</p>
        </CartContent> :
        <>
          <CartContent>
            <BackButton />
              <h2>
                Seu Carrinho
              </h2>
              <p>
                {isFetching ?
                  <Skeleton width={200} /> :
                  <>{`Total (${cartInfo.count} produto${cartInfo.count > 1 ? 's' : ''}) `}<span>{formatPrice(totalProductsPrice)}</span></>
                }
                
              </p>
              <CartItems isLoading={isLoading} isFetching={isFetching} productList={productList}/>
            </CartContent>
            <Resume>
              <h3>RESUMO DO PEDIDO</h3>
              <div>
                <ResumeInfo>
                  <div>Subtotal de produtos</div>
                  {isFetching ? <Skeleton width={65} /> :
                    <span>{formatPrice(totalProductsPrice)}</span>
                  }
                  
                </ResumeInfo>
                <ResumeInfo>
                  <div>Entrega</div>
                  {isFetching ? <Skeleton width={65} /> :
                    <>
                      {
                        totalProductsPrice >= 900 ?
                        <span style={{color: "green"}}>Grátis</span>:
                        <span>{formatPrice(40)}</span>
                      }
                    </>
                  }
                  
                  
                </ResumeInfo>
                <ResumeTotal>
                  <div>Total</div>
                  {isFetching ?
                    <span><Skeleton width={100} /></span> :
                    <span>{formatPrice(totalProductsPrice >= 900 ? totalProductsPrice : totalProductsPrice + 40)}</span>
                  }
                </ResumeTotal>
              </div>
              {isFetching ?
                <Skeleton width="100%" height={40} /> :
                <BuyButton>Finalizar a Compra</BuyButton>
              }
              

              <HelpMenu>
                <li>Ajuda</li>
                <li>Reembolsos</li>
                <li>Entregas e frete</li>
                <li>Trocas e Devoluções</li>
              </HelpMenu>
            </Resume>
        </>
      }
    </Container>
    </>
  )
}