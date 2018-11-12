import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import styles from "./styles.js";

class SearchResult extends Component {
  onClick(address) {
    this.props.onClick(address)
  }
  render() {
    let { classes, activeStep, addresses, onBackClick, selectedAddress } = this.props;
    return <div className={classes.root}>
      <div className={classes.searchResultView}>
        <SwipeableViews index={activeStep}>
          <div>
            <h1>Search Results</h1>
            <List component="nav">
              {addresses.map((address) => {
                return <ListItem button key={address.name} onClick={(e) => { this.onClick(address) }}>
                  <ListItemText primary={address.label} secondary={address.address} />
                </ListItem>;
              })}
            </List>
          </div>
          <div>
            <h1>{selectedAddress.label}</h1>
            <h4>{selectedAddress.address}</h4>
          </div>
        </SwipeableViews>
      </div>
      <div className={classes.mobileStepper}>
        <MobileStepper
          steps={2}
          position="static"
          activeStep={activeStep} 
          nextButton={
            <Button
              size="small"
              onClick={this.handleNext}
              disabled={activeStep !== 1}
            >
              Confirm
              </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={onBackClick}
              disabled={activeStep === 0}
            >
              Back
              </Button>
          }
        />
      </div>
      </div>;
  }
}

export default withStyles(styles)(SearchResult);