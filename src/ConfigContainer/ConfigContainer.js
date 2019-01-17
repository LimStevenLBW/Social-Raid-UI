import React from "react";
import ConfigCommand from "./ConfigCommand/ConfigCommand";
import "./ConfigContainer.css";
import Changelog from "./Changelog"

export default class ConfigContainer extends React.Component {
  constructor(props) {
    super(props);
    var timer;
    this.state = {
      commands: this.props.commands,
      isViewingChangelog: false,
    };
  }

  /* Handles saving the configuration changes from the save button
   * For the message, we check if the input is less than 200 characters before saving
   * If the save was successful, we display the save notification for visibility
   */
  handleSave(timer) {
    let message = document.getElementById("twitterMessage").value;
    let saveMsg = document.getElementById("saved");


    saveMsg.classList.add("fadeCycle");
    timer = setTimeout(
      function () {
        saveMsg.classList.remove("fadeCycle");

      }, 1400);




    /*
    this.props.saveConfig({
                  twitterMessage: message
                });
              }
    */

  }

  handleChangelog() {
    this.setState({ isViewingChangelog: !this.state.isViewingChangelog })
  }


  render() {
    return (

      <div className="ConfigContainer" >
        {/*Conditional Overlay*/}
        <Changelog isViewingChangelog={this.state.isViewingChangelog} />

        {/*Each new option or setting will be displayed in this format*/}
        <div className={this.props.theme === 'light' ? "option-heading-light" : "option-heading-dark"}>Social Media Message</div>
        <div className={this.props.theme === 'light' ? "option-info-light" : "option-info-dark"}>
          This is a short message that your viewers can use by default when they share on social media. Your description must be less than 200 characters long.
        </div>

        {/*How the users will change this setting will be defined here*/}
        <textarea
          id="twitterMessage"
          className="custom-msg"
          rows={3}
          cols={60}
          defaultValue={"Come check out this cool streamer"}
          maxLength={200}
        />

        {/*This is the streamer's description of the incentive for sharing a stream*/}
        <div className={this.props.theme === 'light' ? "option-heading-light" : "option-heading-dark"}>Rewards Message</div>
        <div className={this.props.theme === 'light' ? "option-info-light" : "option-info-dark"}>
          Use a descriptive message to call your viewers to action and encourage them to share your stream. If you offer any rewards, list them here. It must be less than 300 characters.
            </div>

        <textarea
          id="incentiveMessage"
          className="custom-msg"
          rows={4}
          cols={60}
          defaultValue={"Become immortalized for your support on the leaderboard and receive chat shoutouts for reaching referral milestones! Thank you!"}
          maxLength={300}
        />

        <div className={this.props.theme === 'light' ? "option-heading-light" : "option-heading-dark"}>Total Referred Viewers</div>
        <div className={this.props.theme === 'light' ? "option-info-light" : "option-info-dark"}>This is a count of all the people that have been brought in</div>

        {/*Total user referral counter*/}
        <div className={this.props.theme === 'light' ? "counter-light" : "counter-dark"}>
          123456
            </div>

        <div className="config-footer">
          <button className="config-button" onClick={() => this.handleSave()}>Save Changes</button>
          <button
            className="config-button" onClick={() => this.handleChangelog(this.timer)}>

            {!this.state.isViewingChangelog ? 'Changelog' : 'Dismiss Log'}
          </button>


          {/* Error Notification
          <span id={this.props.theme === 'light' ? "error-light" : "error-dark"}>
            Saving failed, please shorten your message
              </span>
             */}
        </div>

        {/*Saved Notification*/}
        <div id="saved">
          <span className="notification">Saved!</span>
        </div>


      </div >

    );
  }
}
