import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import styles from "./styles.js";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

class SearchResult extends Component {
  render() {
    let { addresses } = this.props;
    return <div>
        <h1>Search Results</h1>
        <List component="nav">
          {addresses.map((address) => {
            return <ListItem button key={address.name}>
                <ListItemText primary={address.label} secondary={address.address} />
              </ListItem>;
          })}
        </List>
      </div>;
  }
}

export default withStyles(styles)(SearchResult);