
import { BackButton } from '../../components/BackButton'
import { CartItems } from '../../components/Cart/CartItems'
import { formatPrice } from '../../utils/formatPrice'
import {
  Container,
  CartContent,
  Resume,
  ResumeInfo,
  ResumeTotal,
  BuyButton,
  HelpMenu,
} from './styles'

export default function Cart() {
  return (
    <Container>
      <CartContent>
        <BackButton />
        <h2>Seu Carrinho</h2>
        <p>Total (3 produtos) <span>{formatPrice(161)}</span></p>
        <CartItems />
      </CartContent>
      <Resume>
        <h3>RESUMO DO PEDIDO</h3>
        <div>
          <ResumeInfo>
            <div>Subtotal de produtos</div>
            <span>{formatPrice(161)}</span>
          </ResumeInfo>
          <ResumeInfo>
            <div>Entrega</div>
            <span>{formatPrice(40)}</span>
          </ResumeInfo>
          <ResumeTotal>
            <div>Total</div>
            <span>{formatPrice(40)}</span>
          </ResumeTotal>
        </div>

        <BuyButton>Finalizar a Compra</BuyButton>

        <HelpMenu>
          <li>Ajuda</li>
          <li>Reembolsos</li>
          <li>Entregas e frete</li>
          <li>Trocas e Devoluções</li>
        </HelpMenu>
      </Resume>
    </Container>
  )
}