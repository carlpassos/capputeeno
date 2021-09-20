import { ReactNode, useContext, useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Link from 'next/link'

import Logo from '../../../public/logo-capputeeno.svg'
import ShoppingBag from '../../../public/shopping-bag.svg'
import { SearchBar } from '../../components/Search/SearchBar'

import {
  Container,
  Header,
  LeftSideElements,
  Cart,
  Content,
} from './styles'
import { cartContext } from '../../context/cartContext'

interface DefaultProps {
  children: ReactNode;
}



export function DefaultTheme({children}: DefaultProps) {

  const { getCartCount } = useContext(cartContext)
  const [cartAmount, setCartAmount] = useState(0)

  // const cartCount = getCartCount()

  useEffect(() => {
    setCartAmount(getCartCount())
  }, [getCartCount])

  return (
    <Container>
      <Header>
        <div>
          <Link href="/" passHref>
            <div className="logoContainer">
              <Logo />
            </div>
          </Link>
          <LeftSideElements>
            <SearchBar />
            <Link href="/cart" passHref>
            <Cart>
              <ShoppingBag data-cy="shoppingBag" />
              {cartAmount > 0 && <span data-cy="shoppingBagCount"> {cartAmount} </span> }
            </Cart>
            </Link>
          </LeftSideElements>
        </div>
      </Header>
      <Content>
        {children}
      </Content>
      <ToastContainer />      
    </Container>
  )
}