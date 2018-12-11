import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell(item, colunm) {
    if (colunm.content) return colunm.content(item);
    return _.get(item, colunm.path);
  }
  renderKey(item, colunm) {
    return item._id + (colunm.path || colunm.key);
  }

  render() {
    const { data, colunms } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {colunms.map(colunm => (
              <td key={this.renderKey(item, colunm)}>
                {this.renderCell(item, colunm)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
