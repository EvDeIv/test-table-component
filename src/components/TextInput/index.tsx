import { FC, InputHTMLAttributes, useState } from 'react'

import { Input, IInput } from './styled'

interface ITextInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    IInput {
  value?: string
  // handleChange?: (e: React.FormEvent<HTMLInputElement>) => void
}

const TextInput: FC<ITextInputProps> = ({ value, disabled }) => {
  const [currentValue, setCurrentValue] = useState(value)
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setCurrentValue(e.currentTarget.value)
  }

  return (
    <Input
      type={disabled ? 'text' : 'name'}
      value={currentValue ?? ''}
      onChange={handleChange}
      disabled={disabled}
    />
  )
}

export default TextInput
