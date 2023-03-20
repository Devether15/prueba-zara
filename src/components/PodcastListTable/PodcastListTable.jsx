import React, { useState,useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom';
import useFetchDetail from '../../hooks/use-fetch-detail'
import { useTable } from "react-table";

const PodcastListTable = () => {
  const { id } = useParams();
  const {data, isLoading, isFetching } = useFetchDetail(id)

  const tableData =  useMemo(()=>{
    return data?.data?.results || []
  },[data])

  const columns = useMemo(
    () => [
      {
        Header: "Tittle",
        accessor: "trackName",
      },
      {
        Header: "Date",
        accessor: "releaseDate",
      },
      {
        Header: "Duration",
        accessor: "trackTimeMillis",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: tableData });

  return (
    <div className="App">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
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
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PodcastListTable