import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = path => {
    const sortColunm = { ...this.props.sortColunm };
    if (sortColunm.path === path)
      sortColunm.order = sortColunm.order === "asc" ? "desc" : "asc";
    else {
      sortColunm.path = path;
      sortColunm.order = "asc";
    }
    this.props.onSort(sortColunm);
  };

  renderSortIcon = colunm => {
    const { sortColunm } = this.props;

    if (colunm.path !== sortColunm.path) return null;
    if (sortColunm.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.colunms.map(colunm => (
            <th
              className="clickable"
              key={colunm.path || colunm.key}
              onClick={() => this.raiseSort(colunm.path)}
            >
              {colunm.label} {this.renderSortIcon(colunm)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
