import React, { Component} from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from "@material-ui/core/FormHelperText";
import NativeSelect from "@material-ui/core/NativeSelect";
import CardHeader from '@material-ui/core/CardHeader';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CardActionArea from '@material-ui/core/CardActionArea';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import paymentInformationStyles from "./paymentInformationStyles";
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image'

class PaymentInformation extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        chossenImage: 0,
        method: "venmo"
    };    
      
  };
  
  handleChangePlan = event => {
    // this.setState({ paymentPlan: event.target.value });
    this.props.handleChangePlan(event.target.value);
  };
  handleChangePaymentMethod = event => {
    this.setState({ method: event.target.value });
  };

  handleChangeInstruction = event => {
    this.props.handleChangeInstruction(event.target.value);
  };

  handleChangePaymentInfo = event => {
    var infor = {
        method: this.state.method
    }
    // console.log(=="venmo-number");
    switch (event.currentTarget.id){
        case 'venmo-number':
            infor["data"] = {
                "phone":  event.currentTarget.value
            }
            break;
        case 'paypal-email':
            infor["data"] = {
                "email":  event.currentTarget.value
            }
            break;
        case 'card-number':
            infor["data"] = {
                "card": event.currentTarget.value,
                "name": (this.props.paymentInfo["data"]["name"]=== undefined)?"":this.props.paymentInfo["data"]["name"],
                "month": (this.props.paymentInfo["data"]["month"]=== undefined)?"":this.props.paymentInfo["data"]["month"],
                "year": (this.props.paymentInfo["data"]["year"]=== undefined)?"":this.props.paymentInfo["data"]["year"]
            }
            break;
        case 'card-name':
            infor["data"] = {
                "card": (this.props.paymentInfo["data"]["card"]=== undefined)?"":this.props.paymentInfo["data"]["card"],
                "name": event.currentTarget.value,
                "month": (this.props.paymentInfo["data"]["month"]=== undefined)?"":this.props.paymentInfo["data"]["month"],
                "year": (this.props.paymentInfo["data"]["year"]=== undefined)?"":this.props.paymentInfo["data"]["year"]
            }
            break;
        case 'expired-month':
            infor["data"] = {
                "card": (this.props.paymentInfo["data"]["card"]=== undefined)?"":this.props.paymentInfo["data"]["card"],
                "name": (this.props.paymentInfo["data"]["name"]=== undefined)?"":this.props.paymentInfo["data"]["name"],
                "month": event.currentTarget.value,
                "year": (this.props.paymentInfo["data"]["year"]=== undefined)?"":this.props.paymentInfo["data"]["year"]
            }
            break;
        case 'expired-year':
            infor["data"] = {
                "card": (this.props.paymentInfo["data"]["card"]=== undefined)?"":this.props.paymentInfo["data"]["card"],
                "name": (this.props.paymentInfo["data"]["name"]=== undefined)?"":this.props.paymentInfo["data"]["name"],
                "month": (this.props.paymentInfo["data"]["month"]=== undefined)?"": this.props.paymentInfo["data"]["month"],
                "year": event.currentTarget.value
            }
            break;
            
    }
    this.props.handleChangePaymentInfo(infor);
  }

  handleChangeImage = (idImage) => {
    if (this.props.imageData[idImage].img != "")
        this.setState({chossenImage: idImage})
  }
  getMethodContent = (method) => {
    switch (method){
        case 'venmo':
            return(
                <form className={this.props.classes.container} noValidate autoComplete="off">
                    <TextField
                    id="venmo-number"
                    name="venmo-number"
                    label="Phone #"
                    variant="outlined"
                    className={this.props.classes.cardInfor}
                    helperText="Enter in your connected phone number"
                    required = {true}
                    onChange={this.handleChangePaymentInfo}
                    value={(this.props.paymentInfo["data"]["phone"]===undefined)?"":this.props.paymentInfo["data"]["phone"]}
                    />      
                </form>
            );
        case 'paypal':
            return(
                <form className={this.props.classes.container} noValidate autoComplete="off">
                    <TextField
                    id="paypal-email"
                    name="paypal-email"
                    label="Email"
                    variant="outlined"
                    className={this.props.classes.cardInfor}
                    helperText="Some important textEnter in your connected email address"
                    required = {true}
                    onChange={this.handleChangePaymentInfo}
                    value={(this.props.paymentInfo["data"]["email"]===undefined)?"":this.props.paymentInfo["data"]["email"]}
                    />
                   
                </form>
            );
        case 'card':
            return(
                <form className={this.props.classes.container} noValidate autoComplete="off">
                    <div>
                        <TextField
                        id="card-number"
                        label="Card Number"
                        variant="outlined"
                        className={this.props.classes.cardInfor}
                        required = {true}
                        margin="normal"
                        onChange={this.handleChangePaymentInfo}
                        value={(this.props.paymentInfo["data"]["card"]===undefined)?"":this.props.paymentInfo["data"]["card"]}
                        />
                        <TextField
                        id="card-name"
                        label="Name on card"
                        variant="outlined"
                        className={this.props.classes.cardInfor}
                        required = {true}
                        margin="normal"
                        onChange={this.handleChangePaymentInfo}
                        value={(this.props.paymentInfo["data"]["name"]===undefined)?"":this.props.paymentInfo["data"]["name"]}
                        />
                    </div>
                    <div>
                        <TextField
                        id="expired-month"
                        label="MM"
                        variant="outlined"
                        className={this.props.classes.cardExpired}
                        required = {true}
                        margin="normal"
                        onChange={this.handleChangePaymentInfo}
                        value={(this.props.paymentInfo["data"]["month"]===undefined)?"":this.props.paymentInfo["data"]["month"]}
                        />
                        <TextField
                        id="expired-year"
                        label="YYYY"
                        variant="outlined"
                        className={this.props.classes.cardExpired}
                        required = {true}
                        margin="normal"
                        onChange={this.handleChangePaymentInfo}
                        value={(this.props.paymentInfo["data"]["year"]===undefined)?"":this.props.paymentInfo["data"]["year"]}
                        />
                    </div>
                    
                </form>
            );
        default:
            return 'Other';
    }
  };

  render() {
    let { address,
      onTextfieldChange,
      numSpots,
      onCheckboxChange,
      handleChangePaymentInfo,
      handleChangeInstruction,
      paymentPlan,
      paymentInfo,
      imageData
     } = this.props;
    return <div>
        
        <div> 
            <CardHeader 
                title="PRICING" 
                className={this.props.classes.sectionTitle} 
                classes={{ title: this.props.classes.title, subheader: this.props.classes.subheader }}
                subheader="Purk's pricing algorithm has generated these numbers to maximize the number of reservations that you get. We want the best for our clients, and these prices put you at an advantage to all of your competition!"/>
            <FormControl className={this.props.classes.formControl}>
                <NativeSelect
                    value={this.props.paymentPlan}
                    name="plan"
                    className={this.props.classes.selectEmpty}
                    onChange={this.handleChangePlan}
                >
                    <option value={1}>Hourly ($2.00)</option>
                    <option value={2}>Daily ($7.00)</option>
                    <option value={3}>Weekly ($35.00)</option>
                    <option value={4}>Monthly ($100.00)</option>
                </NativeSelect>
                <FormHelperText>Select your plan</FormHelperText>
            </FormControl>
        </div>
        <div>
            <div className={this.props.classes.root}>
                <CardHeader 
                title="PAYMENT METHOD" 
                className={this.props.classes.sectionTitle} 
                classes={{ title: this.props.classes.title }}
                subheader="Choose your preferred method of payment"/>
                <Grid container>
                    <Grid item xs={12} sm={3} alignItems="center">
                    <FormControl component="fieldset" className={this.props.classes.formControl}>
                        
                        <RadioGroup
                            aria-label="Gender"
                            name="gender1"
                            className={this.props.classes.group}
                            value={this.state.method}
                            onChange={this.handleChangePaymentMethod.bind(this)}
                        >
                            <FormControlLabel value="venmo" control={<Radio color="primary"/>} label="Venmo"  />
                            <FormControlLabel value="paypal" control={<Radio color="primary"/>} label="Paypal" />
                            <FormControlLabel value="card" control={<Radio color="primary"/>} label="Credit or Debit" />
                            <FormControlLabel
                            value="disabled"
                            disabled
                            control={<Radio />}
                            label="(Other option)"
                            />
                        </RadioGroup>
                    </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        {this.getMethodContent(this.state.method)}
                    </Grid>
                </Grid>
            </div>
        </div>
        <div>
            <CardHeader 
            title="ADDITIONAL INFORMATION" 
            className={this.props.classes.sectionTitle} 
            classes={{ title: this.props.classes.title }}/>
            <Grid container>
                <Grid item xs={12} sm={4} alignItems="center">
                    <GridList 
                        className={this.props.classes.gridList} 
                        cols={1}
                        cellHeight={150}>
                        {this.props.imageData.map(tile => (
                        <GridListTile key={tile.img}>
                            <img src={tile.img==="" ? window.location.origin + '/add-photo.png':tile.img} alt={tile.title} onClick={(event)=>this.handleChangeImage(tile.id)}/>
                        </GridListTile>
                        ))}
                    </GridList>
                </Grid>
                <Grid item xs={12} sm={8} alignItems="center">
                    <div id="image-show">
                    <Image 
                    src={this.props.imageData[this.state.chossenImage].img}
                    animationDuration={3000}
                    imageStyle={{ "max-height": '450px', width: "auto", height: "auto" }}
                    style={{ "padding-top": "calc(50%)" }}/>
                    </div>
                </Grid>
            </Grid>
            <div>
                <TextField
                label="Parking Instructions"
                className={this.props.classes.instructions}
                variant="outlined"
                required = {true}
                margin="normal"
                multiline={true}
                rows={4}
                rowsMax={6}
                onChange={this.handleChangeInstruction}
                />
            </div>
            
        </div>
        
      </div>
  }
}

export default withStyles(paymentInformationStyles)(PaymentInformation);