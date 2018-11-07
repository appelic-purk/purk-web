import React from "react";
import TextField from "@material-ui/core/TextField";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import AddIcon from "@material-ui/icons/Add";

export function handleInlineDelete(row_id) {
  let data = this.state.data;

  let newData = [];
  for (let i = 0; i < data.length; i++) {
    let id = data[i].row_id;
    if (id !== row_id) {
      newData.push(data[i]);
    }
  }
  for (let i = 0; i < newData.length; i++) {
    newData[i]["row_id"] = i;
  }
  this.setState({ data: newData, filteredData: newData, selected: [] }, () =>
    this.handleChange()
  );
}

export function insertRow(
  row,
  isSelected,
  rowNum,
  presentOnly,
  disabled
) {
  const handleDoneClick = (event, id) => {
    const { beingEdited } = this.state;
    let error = false;
    for (let i = 0; i < this.state.data.length; i++) {
      if (id === this.state.data[i].row_id && this.state.data[i].value === "") {
        this.setState({ error: true });
        error = true;
        alert("Cannot save empty row.");
      }
    }
    if (!error) {
      beingEdited.splice(beingEdited.indexOf(id), 1);

      this.setState({ beingEdited: beingEdited });
      this.handleChange();
    }
  };

  const handleEditClick = (event, id) => {
    const { beingEdited } = this.state;
    const selectedIndex = beingEdited.indexOf(id);
    let newBeingEditedList = [];

    if (selectedIndex === -1) {
      newBeingEditedList = newBeingEditedList.concat(beingEdited, id);
    } else if (selectedIndex === 0) {
      newBeingEditedList = newBeingEditedList.concat(beingEdited.slice(1));
    } else if (selectedIndex === beingEdited.length - 1) {
      newBeingEditedList = newBeingEditedList.concat(beingEdited.slice(0, -1));
    } else if (selectedIndex > 0) {
      newBeingEditedList = newBeingEditedList.concat(beingEdited.slice(0, selectedIndex), beingEdited.slice(selectedIndex + 1));
    }
    this.setState({ beingEdited: newBeingEditedList });
  };

  const insertDeleteButton = (row, beingEdited) => {
    if (this.isBeingEdited(row.row_id) === true || beingEdited.length > 0) {
      return <Tooltip title="Delete">
          <div>
            <IconButton aria-label="Delete" onClick={() => this.handleInlineDelete(row.row_id)} disabled={true}>
              <DeleteIcon />
            </IconButton>
          </div>
        </Tooltip>;
    } else {
      return <Tooltip title="Delete">
          <div>
            <IconButton aria-label="Delete" onClick={() => this.handleInlineDelete(row.row_id)}>
              <DeleteIcon />
            </IconButton>
          </div>
        </Tooltip>;
    }
  };

  const insertEditButton = (row, beingEdited) => {
    if (this.isBeingEdited(row.row_id) === true) {
      return <Tooltip title="Save">
          <div>
            <IconButton onClick={event => handleDoneClick(event, row.row_id)}>
              <SaveIcon />
            </IconButton>
          </div>
        </Tooltip>;
    } else {
      if (beingEdited.length > 0) {
        return <Tooltip title="Edit">
            <div>
              <IconButton onClick={event => handleEditClick(event, row.row_id)} disabled={true}>
                <EditIcon />
              </IconButton>
            </div>
          </Tooltip>;
      }
      return <Tooltip title="Edit">
          <div>
            <IconButton onClick={event => handleEditClick(event, row.row_id)}>
              <EditIcon />
            </IconButton>
          </div>
        </Tooltip>;
    }
  };
  const onInputChange = (e, name) => {
    let data = [...this.state.data];
    let value = e.target.value;
    let updatedData = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].row_id === rowNum) {
        data[i][name] = value;
        updatedData.push(data[i]);
      } else {
        updatedData.push(data[i]);
      }
    }
    this.setState({ data: updatedData }, () => this.handleChange());
  };

  let rowContent = [];
  let rowKeys = Object.getOwnPropertyNames(row);
  for (let i = 0; i < rowKeys.length; i++) {
    if (rowKeys[i] !== "row_id") {
      let name = this.props.headers[i].name;
      rowContent.push(
        <TableCell key={name}>
          <TextField
            key={i}
            name={name}
            onChange={(e)=> onInputChange(e, name)}
            disabled={this.isBeingEdited(row.row_id) === false}
            value={row[rowKeys[i]]}
            default={""}
          />
        </TableCell>
      );
    }
  }

  rowContent.push(
    <TableCell key={"edit"} style={{ width: "10%" }}>
      <div style={{ display: "flex" }}>
        {insertEditButton(row, this.state.beingEdited)}
        {insertDeleteButton(row, this.state.beingEdited)}
      </div>
    </TableCell>
  );

  return rowContent;
}

export const insertAddButton = (beingEdited, handleAdd, disabled) => {
  return (
    <IconButton
      aria-label="Add"
      onClick={handleAdd}
      style={{ display: "block", margin: "auto" }}
      disabled={beingEdited.length > 0}
    >
      <AddIcon />
    </IconButton>
  );
};