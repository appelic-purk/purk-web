import React, { Component } from "react";
import PropTypes from 'prop-types';
import FacebookIcon from './../../../../images/icons/fb_raw.png';
import InstagramIcon from './../../../../images/icons/instagram_raw.png';
import TwitterIcon from './../../../../images/icons/twitter_raw.png';
import "./index.css";

class Container7 extends Component {
    state = {
        name: '',
        phonenumber: '',
        email: '',
        feedback: '',
        formSubmitted: false
    };
    
    handleCancel = this.handleCancel.bind(this);
    handleChange = this.handleChange.bind(this);
    handleSubmit = this.handleSubmit.bind(this);
    
    handleCancel() {
        this.setState({
            name: '',
            phonenumber: '',
            email: '',
            feedback: ''
                      });
    }
    
    handleChange(event) {
        this.setState({
                      [event.target.name]: event.target.value
                      });
    }
    
    handleSubmit(event) {
        event.preventDefault()
        
        this.sendFeedback(
                          'purk_web_feedback',
                          this.state.name,
                          this.state.phonenumber,
                          this.state.email,
                          'phokingandy@gmail.com',
                          this.state.feedback);
        
        this.setState({
            formSubmitted: true
        });
    }
    
    sendFeedback(templateId, name, phoneNumber, senderEmail, receiverEmail, feedback) {
        window.emailjs.send(
                            'gmail2',
                            templateId,
                            {
                            name,
                            phoneNumber,
                            senderEmail,
                            receiverEmail,
                            feedback
                            })
        .then(res => {
              this.setState({ formEmailSent:true })
              })
        .catch(err => console.error('Failed to send feedback. Error: ', err))
    }
    
  render() {
    return <div className="Container7">
        <div className="row1">
          <div className="title">
            <div className="container7_title">
              <p>
                    <u>Get In Touch</u>
              </p>
            </div>
          </div>
          <div className="description">
            <p>
                Have questions about Purk? Want updates on our app? Looking to partner with us?
                <br />
                Give us a buzz and we'll be sure to get back to you faster than you can park your car!
            </p>
          </div>
        </div>
    <div className="row2">
      <div className="column0">
        <a className="name" style={{ textAlign: "left" }}>
            Name:
        </a>
        <br />
        <br />
        <a className="pn" style={{ textAlign: "left" }}>
            Phone Number:
        </a>
        <br />
        <br />
        <a className="email" style={{ textAlign: "left" }}>
            E-Mail:
        </a>
        <br />
        <br />
        <a className="msg" style={{ textAlign: "left" }}>
            Message:
        </a>
      </div>
      <form className="feedback-form" onSubmit={this.handleSubmit}>
      <div className="column1">
      <textarea
            className="name-input"
            id="name-entry"
            name="name"
            onChange={this.handleChange}
            placeholder=""
            required
            value={this.state.name}
        />
        <br />
        <textarea
            className="phone-input"
            id="phonenumber-entry"
            name="phonenumber"
            onChange={this.handleChange}
            placeholder=""
            required
            value={this.state.phonenumber}
        />
        <br />
        <textarea
            className="email-input"
            id="email-entry"
            name="email"
            onChange={this.handleChange}
            placeholder=""
            required
            value={this.state.email}
        />
        <br />
        <textarea
            className="feedback-input"
            id="feedback-entry"
            name="feedback"
            onChange={this.handleChange}
            placeholder=""
            required
            value={this.state.feedback}
        />
      </div>
        <div className="btn">
            <button className="btn btn--submit" onClick={this.handleChange}>
                Submit
            </button>
        </div>
      </form>
    </div>
      <div className="row3">
        FOLLOW US ON SOCIAL MEDIA
        <br />
        <div className="line">
            _________
        </div>
      </div>
      
      <div className="row4">
        <a href="https://www.facebook.com/purkparking">
            <img className="img" src={FacebookIcon} />
        </a>
        <a href="https://www.instagram.com/purkparking/">
            <img className="img" src={InstagramIcon} />
        </a>
        <a href="https://twitter.com/purkparking">
            <img className="img" src={TwitterIcon} />
        </a>
        </div>
      </div>;
  }
    
}
export default Container7;
