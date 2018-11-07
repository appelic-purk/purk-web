const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: "100%"
  },
  tableWrapper: {
    overflowX: "auto"
  },
  tableRow: {
    "&:hover": {
      backgroundColor: "#ECFBF9 !important"
    }
  }
});

export default styles;
