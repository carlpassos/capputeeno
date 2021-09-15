import { ReactNode } from 'react'

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
          <Logo />
          <LeftSideElements>
            <SearchBar />
            <Cart>
              <ShoppingBag />
              <span>
                2
              </span>
            </Cart>
          </LeftSideElements>
        </div>
      </Header>
      <Content>
        {children}
      </Content>      
    </Container>
  )
}