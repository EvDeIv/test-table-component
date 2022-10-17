import { FC } from 'react'

import CircleLoader from 'react-spinners/CircleLoader'

import { LoaderContainer } from './styled'

interface ILoader {
  size?: number
}

const Loader: FC<ILoader> = ({ size }) => {
  return (
    <LoaderContainer>
      <CircleLoader color="#00BFFF" size={size} />
    </LoaderContainer>
  )
}

export default Loader
