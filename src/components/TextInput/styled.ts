import styled, { css } from 'styled-components'

import colors from 'src/common/theme/colors'

export interface IInput {
  disabled?: boolean
}

const editableInput = css`
  cursor: pointer;
  :disabled {
    background-color: unset;
    border: none;
  }
`

export const Input = styled.input<IInput>`
  width: 100%;
  outline: none;
  margin-right: 5px;
  padding: 3px;
  border: 1px solid ${colors.lavender};
  border-radius: 8px;
  ${({ disabled }) => disabled && editableInput};
`
