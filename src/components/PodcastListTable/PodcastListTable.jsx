import React, { useMemo } from 'react'
import { useTable } from "react-table";
import './PodcastListTable.css'
import { useNavigate  } from "react-router-dom";

const PodcastListTable = ({ results }) => {
  const navigate = useNavigate ();
  const handleRowClick = (collectionId, trackId) => {
    navigate(`/podcast/${collectionId}/episode/${trackId}`); 
  }
  const tableData =  useMemo(()=>{
    return results || []
  },[results])

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
    <div className="PodcastListTableContainer">
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
            {rows.map((row, index) => {
              prepareRow(row);
              const collectionId = row.original.collectionId;
              const trackId = row.original.trackId;
              return (
                <tr style ={ index % 2? { background : "#e3e3e3" }:{ background : "white" }} {...row.getRowProps()}>
                  {row.cells.map((cell) => (                                       
                      <td onClick={()=> handleRowClick(collectionId, trackId)} className={cell.column.Header === 'Tittle' ? 'PodcastListTable-td PodcastListTable-tittle' : 'PodcastListTable-td' } {...cell.getCellProps()}> {cell.render("Cell")}</td>               
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