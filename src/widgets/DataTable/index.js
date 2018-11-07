import React, { Component } from "react";
import PropTypes from "prop-types";
import EnhancedTable from "./EnhancedTable";

class DataTable extends Component {
  render() {
    let {
      data,
      columns,
      tableName,
      checkbox,
      handleChange,
      presentOnly,
      onClick,
      name,
      tablePagination,
      disabled,
      searchable
    } = this.props;
    return (
      <EnhancedTable
        onChange={handleChange}
        tableName={tableName}
        data={data}
        headers={columns}
        checkbox={checkbox}
        presentOnly={presentOnly}
        tablePagination={tablePagination}
        onClick={onClick}
        name={name}
        disabled={disabled}
        searchable={searchable}
      />
    );
  }
}

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  checkbox: PropTypes.bool,
  onChange: PropTypes.func,
  presentOnly: PropTypes.bool,
  tablePagination: PropTypes.bool,
  tableToolbar: PropTypes.bool,
  disabled: PropTypes.bool
};

DataTable.defaultProps = {
  order: "asc",
  orderBy: "",
  selected: [],
  data: [],
  rowsPerPage: 5,
  page: 0,
  checkbox: false,
  onChange: () => { },
  presentOnly: false,
  tablePagination: true,
  tableToolbar: true,
  disabled: false
};

export default DataTable;
