import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EnhancedTableToolbar from "./EnhancedTableToolbar";
import EnhancedTableHead from "./EnhancedTableHead"
import { insertRow, insertAddButton, handleInlineDelete } from "./helperfunctions.js";
import styles from "./styles.js";

export function createData(counter, array, headers) {
  let data = {};
  for (let i = 0; i < array.length; i++) {
    data[headers[i].name] = array[i];
  }
  data["row_id"] = counter;
  return data;
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

class EnhancedTable extends Component {
  state = {
    order: "asc",
    orderBy: "calories",
    selected: [],
    data: [],
    page: 0,
    rowsPerPage: 5,
    beingEdited: [],
    headers: this.props.headers
  };

  insertRow = insertRow.bind(this);
  insertAddButton = insertAddButton.bind(this);
  handleInlineDelete = handleInlineDelete.bind(this);

  isBeingEdited = id => this.state.beingEdited.includes(id);

  handleAdd = event => {
    let { headers, data, beingEdited } = this.state;
    let newRow = [];
    for (let i = 0; i < headers.length; i++) {
      newRow.push("");
    }
    newRow = createData(data.length, newRow, headers);
    data.push(newRow);
    beingEdited.push(newRow.row_id);
    this.setState(
      { data: data, filteredData: data, beingEdited: beingEdited },
      () => this.handleChange()
    );
  };

  handleChange = event => {
    let data = [];
    let copy = [...this.state.data];
    let name = this.props.name;
    for (let i = 0; i < copy.length; i++) {
      let processedData = {};
      for (let key in copy[i]) {
        if (key !== "row_id") {
          processedData[key] = copy[i][key];
        }
      }
      data.push(processedData);
    }
    this.props.onChange({ [name]: data });
  };

  componentWillMount() {
    let counter = 0;
    let processedData = [];
    for (let i = 0; i < this.props.data.length; i++) {
      let row = this.props.data[i];
      row["row_id"] = counter;
      counter += 1;
      processedData.push(row);
    }
    this.setState({ data: processedData, filteredData: processedData });
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes, headers, tableName } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          tableName={tableName}
        />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              rows={headers}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n.id);
                  return (
                    <TableRow
                      hover
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.row_id}
                      selected={isSelected}
                    >
                      {this.insertRow(n, isSelected, n.row_id)}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={6}>
                  {this.insertAddButton(this.state.beingEdited, this.handleAdd)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);
