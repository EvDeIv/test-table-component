import React, { FC, useCallback, memo, useState } from 'react'

import SVG from 'react-inlinesvg'
import { useTable } from 'react-table'
import { v4 } from 'uuid'

import { IconSortAmountDownRegular } from 'src/common/assets/icons'

import TableEmpty from './components/TableEmpty'
import TableLoader from './components/TableLoader'
import {
  TableContainer,
  TableHeader,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  TableWrapper,
  ContainerText,
  AddTableRow,
} from './styled'

interface ISortBy {
  key: string
  text: string
}

interface IColumns {
  accessor: string
  header: string
  width: number
}
export interface IDataItem {
  [key: string]: any
}

interface ITable {
  loading: boolean
  sortBy?: ISortBy[]
  columns: IColumns[]
  data: IDataItem[]
  handleSorting?: (key: string) => void
  handleAdd?: () => void
}

const Table: FC<ITable> = (props) => {
  const { loading, sortBy, columns, handleSorting, data, handleAdd } = props

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ data: data || [], columns })

  const [activeTh, setActiveTh] = useState('')

  const noData = data?.length === 0

  const clickToSort = (key: string) => () => {
    setActiveTh(key)
    !!handleSorting && handleSorting(key)
  }

  const renderHead = useCallback(
    () => (
      <TableHead>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()} key={v4()}>
            {headerGroup.headers.map((column) => {
              const sort =
                !!handleSorting &&
                !!sortBy?.find(
                  (sortingColumn) => sortingColumn.key === column.id,
                )
              return (
                <TableHeader
                  {...column.getHeaderProps()}
                  $width={column.width}
                  sort={sort}
                  active={activeTh === column.id}
                  onClick={sort ? clickToSort(column.id) : () => {}}
                  key={v4()}
                >
                  <ContainerText>
                    {column.render('header')}
                    {!!handleSorting && <SVG src={IconSortAmountDownRegular} />}
                  </ContainerText>
                </TableHeader>
              )
            })}
          </TableRow>
        ))}
      </TableHead>
    ),
    [columns, activeTh],
  )

  const renderBody = useCallback(() => {
    return (
      <TableBody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <TableRow {...row.getRowProps()} key={v4()}>
              {row.cells.map((cell) => {
                return (
                  <TableCell {...cell.getCellProps()} key={v4()}>
                    {cell.render('Cell')}
                  </TableCell>
                )
              })}
            </TableRow>
          )
        })}
      </TableBody>
    )
  }, [data])

  const renderAddRow = (): React.ReactNode => {
    return <AddTableRow onClick={handleAdd}>Add Row</AddTableRow>
  }

  return (
    <TableContainer>
      <TableWrapper {...getTableProps}>
        {columns && renderHead()}
        {!noData && !loading && renderBody()}
      </TableWrapper>

      {!!handleAdd && !loading && renderAddRow()}

      {noData && !loading && <TableEmpty />}
      {loading && <TableLoader />}
    </TableContainer>
  )
}

export default memo(Table)
