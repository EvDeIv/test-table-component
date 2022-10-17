import { FC } from 'react'

import { TableSkeleton, Text } from './styled'

const TableEmpty: FC = () => {
  return (
    <TableSkeleton>
      <Text>No Data</Text>
    </TableSkeleton>
  )
}

export default TableEmpty
