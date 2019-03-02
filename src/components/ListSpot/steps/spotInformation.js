import React, { Component} from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import spotInformationStyles from "./spotInformationStyles";

class SpotInformation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { address,
      onTextfieldChange,
      numSpots,
      onCheckboxChange,
      lit,
      gated,
      covered,
      xlspot,
      charging,
      security,
      driveway,
      parkingLot,
      homeGarage,
      unpavedLot,
      parkingGarage
     } = this.props;
    return <div>
        <div className={this.props.classes.inputElement}>
          <TextField
            className={this.props.classes.addressField}
            id="address"
            label="Address"
            fullWidth={true}
            placeholder="1 Hacker Way, Menlo Park"
            value={address}
            onChange={onTextfieldChange("address")}
          />
        </div>
        <div className={this.props.classes.inputElement}>
          <TextField
            className={this.props.classes.numSpots}
            id="numSpots"
            label="Number of Spots"
            type="number"
            value={numSpots}
            onChange={onTextfieldChange("numSpots")}
          />
        </div>
        <div>
          <FormControl>
            <FormLabel>Amenities</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    id="lit"
                    color="primary"
                    checked={lit}
                    onChange={onCheckboxChange("lit")}
                  />
                }
                label="Lit"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    id="gated"
                    color="primary"
                    checked={gated}
                    onChange={onCheckboxChange("gated")}
                  />
                }
                label="Gated"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    id="covered"
                    color="primary"
                    checked={covered}
                    onChange={onCheckboxChange("covered")}
                  />
                }
                label="Covered"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    id="xlspot"
                    color="primary"
                    checked={xlspot}
                    onChange={onCheckboxChange("xlspot")}
                  />
                }
                label="XL Spot"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    id="charging"
                    color="primary"
                    checked={charging}
                    onChange={onCheckboxChange("charging")}
                  />
                }
                label="Charging"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    id="security"
                    color="primary"
                    checked={security}
                    onChange={onCheckboxChange("security")}
                  />
                }
                label="Security"
              />
            </FormGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Type of Spot</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    id="driveway"
                    color="primary"
                    checked={driveway}
                    onChange={onCheckboxChange("driveway")}
                  />
                }
                label="Driveway"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    id="parkingLot"
                    color="primary"
                    checked={parkingLot}
                    onChange={onCheckboxChange("parkingLot")}
                  />
                }
                label="Parking Lot"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    id="homeGarage"
                    color="primary"
                    checked={homeGarage}
                    onChange={onCheckboxChange("homeGarage")}
                  />
                }
                label="Home Garage"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    id="unpavedLot"
                    color="primary"
                    checked={unpavedLot}
                    onChange={onCheckboxChange("unpavedLot")}
                  />
                }
                label="Unpaved Lot"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    id="parkingGarage"
                    color="primary"
                    checked={parkingGarage}
                    onChange={onCheckboxChange("parkingGarage")}
                  />
                }
                label="Parking Garage"
              />
            </FormGroup>
          </FormControl>
        </div>
      </div>
  }
}

export default withStyles(spotInformationStyles)(SpotInformation);