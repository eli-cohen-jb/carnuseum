import React, { Component } from "react";

class TableHeader extends Component {
  // columns: array
  // onsort: function
  // sortcolumn object

  raisSort = (path) => {
    let sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else sortColumn = { path: path, order: "asc" };

    this.props.onSort(sortColumn);
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((c) => {
            return (
              <th key={c.key || c.path} onClick={() => this.raisSort(c.path)}>
                {c.label}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
