import { InputHTMLAttributes, Ref, forwardRef } from 'react'

import { Container } from './styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean
}

export const Radio = forwardRef(function Radio(
  { children, isSelected, ...rest }: Props,
  ref: Ref<HTMLInputElement>,
) {
  return (
    <Container data-state={isSelected}>
      <input type="radio" ref={ref} {...rest} />
      {children}
    </Container>
  )
})
