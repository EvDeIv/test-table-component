import styled from 'styled-components'

import colors from 'src/common/theme/colors'

export const TableSkeleton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  color: ${colors.darkGray};
  padding: 12px;
  border: 1px solid ${colors.lavender};
  border-top: none;
`

export const Text = styled.p`
  font-weight: 400;
  text-align: left;
  font-size: 12px;
  color: ${colors.lightGray};
`
