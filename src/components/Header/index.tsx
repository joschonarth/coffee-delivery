import { MapPinIcon, ShoppingCartIcon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import { Aside, Container } from './styles'

export function Header() {
  return (
    <Container>
      <Link to="/">
        <img src="/logo.svg" alt="Coffee Delivery" />
      </Link>

      <Aside>
        <div>
          <MapPinIcon size={22} weight="fill" />
          <span>São Paulo, SP</span>
        </div>

        <ShoppingCartIcon size={22} weight="fill" />
      </Aside>
    </Container>
  )
}
