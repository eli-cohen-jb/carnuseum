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

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;

    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>;

    return <i className="fa fa-sort-desc"></i>;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((c) => {
            return (
              <th className="clickable" key={c.key || c.path} onClick={() => this.raisSort(c.path)}>
                {c.label} {this.renderSortIcon(c)}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
