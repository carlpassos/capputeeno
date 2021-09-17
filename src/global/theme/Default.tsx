import { ReactNode } from 'react'

import Link from 'next/link'

import Logo from '../../../public/logo-capputeeno.svg'
import ShoppingBag from '../../../public/shopping-bag.svg'
import { SearchBar } from '../../components/SearchBar'

import {
  Container,
  Header,
  LeftSideElements,
  Cart,
  Content,
} from './styles'

interface DefaultProps {
  children: ReactNode;
}

export function DefaultTheme({children}: DefaultProps) {
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
              <ShoppingBag />
              <span>
                2
              </span>
            </Cart>
            </Link>
          </LeftSideElements>
        </div>
      </Header>
      <Content>
        {children}
      </Content>      
    </Container>
  )
}