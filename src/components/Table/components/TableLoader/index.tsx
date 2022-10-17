import { FC } from 'react'

import Loader from 'src/components/Loader'
import { TableSkeleton } from 'src/components/Table/styled'

const TableLoader: FC = () => {
  return (
    <TableSkeleton>
      <Loader size={50} />
    </TableSkeleton>
  )
}

export default TableLoader
