import React from "react"
import styled from "styled-components"
import { White, Orange, BorderRadius, StrokeWeight, Mobile } from "./variables"

export const Button = styled.button`
  color: ${Orange};
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: ${BorderRadius};
  outline: none;
  background: none;
  border: ${StrokeWeight} solid ${Orange};
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: ${White};
    background: ${Orange};
  }

  @media (max-width: ${Mobile}) {
    padding: 0.25rem 0.5rem;
  }
`

const BuyButton = props => <Button {...props}>Add to Cart</Button>

export default BuyButton