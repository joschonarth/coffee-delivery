import { MinusIcon, PlusIcon } from '@phosphor-icons/react'
import { Container } from './styles'

type Props = {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export function QuantityInput({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: Props) {
  return (
    <Container>
      <button onClick={decrementQuantity}>
        <MinusIcon size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity}>
        <PlusIcon size={14} />
      </button>
    </Container>
  )
}
