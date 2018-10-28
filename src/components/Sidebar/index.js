import React, { Component } from "react";
import ReactSidebar from "react-sidebar";
import SidebarContent from "./sidebarContent/";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import styles from "./styles.js";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docked: false,
      open: false,
      transitions: true,
      touch: true,
      shadow: true,
      pullRight: false,
      touchHandleWidth: 20,
      dragToggleDistance: 30
    };
    this.onSetOpen = this.onSetOpen.bind(this);
    this.menuButtonClick = this.menuButtonClick.bind(this);
  }

  onSetOpen(open) {
    this.setState({ open });
  }

  menuButtonClick(ev) {
    ev.preventDefault();
    this.onSetOpen(!this.state.open);
  }

  render() {
    let { classes } = this.props;
    const sidebarProps = {
      sidebar:< SidebarContent />,
      docked: this.state.docked,
      contentId: "sidebar",
      open: this.state.open,
      touch: this.state.touch,
      shadow: this.state.shadow,
      pullRight: this.state.pullRight,
      touchHandleWidth: this.state.touchHandleWidth,
      dragToggleDistance: this.state.dragToggleDistance,
      transitions: this.state.transitions,
      onSetOpen: this.onSetOpen,
    };
    return (
      <ReactSidebar {...sidebarProps}>
        <span className={classes.sidebarHeader}>
          {!this.state.docked && (
            <IconButton onClick={this.menuButtonClick} className={classes.sidebarMenuIcon}>
              <MenuIcon />
            </IconButton>
          )}
          <span>Purk</span>
        </span>
      </ReactSidebar>
    );
  }
}

export default withStyles(styles)(Sidebar);