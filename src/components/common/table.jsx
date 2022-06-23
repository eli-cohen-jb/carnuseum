import React from 'react';

import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = (props) => {
    const { data, onDelete, onSort, onLike, sortColumn } = props;
    return ( 
        <table className="table">
        <TableHeader
          columns={props.columns}
          onSort={onSort}
          sortColumn={sortColumn}
        ></TableHeader>
        <TableBody
          columns={props.columns}
          data={data}
          onLike={onLike}
          onDelete={onDelete}
        ></TableBody>        
      </table>
    );
}
 
export default Table;