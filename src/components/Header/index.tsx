import { MapPinIcon, ShoppingCartIcon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import { useCart } from '../../hooks/useCart'
import { Aside, Container } from './styles'

export function Header() {
  const { cart } = useCart()

  return (
    <Container>
      <Link to="/">
        <img src="/logo.svg" alt="Coffee Delivery" />
      </Link>

      <Aside>
        <div>
          <MapPinIcon size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>

        <Link to={`cart`} aria-disabled={cart.length === 0}>
          <ShoppingCartIcon size={22} weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </Aside>
    </Container>
  )
}
