import React, { FunctionComponent } from 'react';
import style from './App.module.css';
import { ColumnWithLooseAccessor, useSortBy, useTable } from 'react-table';

const useData = () =>
  React.useMemo(
    () => [
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    []
  );

const useColumns = (): Array<ColumnWithLooseAccessor> =>
  React.useMemo(
    () => [
      {
        Header: 'こんにちは',
        columns: [
          {
            Header: 'ネストできるよ',
            columns: [
              {
                Header: 'Column 1',
                accessor: 'col1',
              },
              {
                Header: 'Column 2',
                accessor: 'col2',
              },
            ],
          },
        ],
      },
    ],
    []
  );

const App: FunctionComponent = () => {
  const data = useData();
  const columns = useColumns();
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <table className={style.table} {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                className={style.tableHeader}
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {column.render('Header')}
                {column.isSorted ? (column.isSortedDesc ? '↑' : '↓') : null}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td className={style.tableData} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default App;
