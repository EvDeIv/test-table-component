import styled, { css } from 'styled-components'

import colors from 'src/common/theme/colors'

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`

export const TableWrapper = styled.table`
  border-spacing: 0;
  font-size: 14px;
  line-height: 20px;
  width: fit-content;
  table-layout: fixed;
  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1))
    drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.06));
`

export const TableHead = styled.thead``

export const TableBody = styled.tbody``

export const AddTableRow = styled.div`
  color: ${colors.darkGray};
  padding: 12px;
  border-bottom: 1px solid ${colors.lavender};
  background-color: ${colors.white};
  text-align: center;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1))
    drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.06));
  cursor: pointer;
`

const activeTh = css`
  color: ${colors.primary};

  svg {
    stroke: ${colors.primary};
    fill: ${colors.primary};
  }
`

const canSorting = css`
  cursor: pointer;
  :hover {
    ${activeTh};
  }
`

interface ITableHeader {
  $width?: string | number
  sort: boolean
  active: boolean
}

export const TableHeader = styled.th<ITableHeader>`
  background-color: ${colors.lightGray};
  padding: 12px;
  color: ${colors.darkGray};
  border-bottom: 1px solid ${colors.lavender};
  font-weight: 500;
  text-align: left;
  width: ${({ $width }) => ($width ? `${$width}px` : 'auto')};

  svg {
    margin-left: 4px;
  }

  :first-child {
    border-top-left-radius: 8px;
  }

  :last-child {
    border-top-right-radius: 8px;
  }

  ${({ sort }) => sort && canSorting};

  ${({ active }) => active && activeTh};
`
export const ContainerText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    min-width: 14px;
  }
`

export const TableRow = styled.tr``

export const TableCell = styled.td`
  color: ${colors.darkGray};
  padding: 12px;
  border-bottom: 1px solid ${colors.lavender};
  word-break: break-all;
  background-color: ${colors.white};
`

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
