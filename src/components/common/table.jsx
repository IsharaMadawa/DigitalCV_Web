import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ colunms, sortColunm, onSort, data }) => {
  return (
    <table className="table">
      <TableHeader colunms={colunms} sortColunm={sortColunm} onSort={onSort} />
      <TableBody colunms={colunms} data={data} />
    </table>
  );
};

export default Table;
