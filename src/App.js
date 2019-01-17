import React, { Component } from "react";
import Leaderboard from "./Leaderboard";
import PermissionsOverlay from './PermissionsOverlay'
import RewardsOverlay from './RewardsOverlay'
import ConfigPage from "./ConfigPage";
import "./App.css";
import fb from './Images/fb.svg'
import twit from './Images/twit.svg'


/*Component to display a user's generated referral link, displayed as readonly*/
function ReferralLink(props) {
  return (
    <input
      className="referral-container"
      type="text"
      name="link"
      value={props.referralProp}
      readOnly
    />
  );
}

export default class App extends Component {
  /*This constructor is just for testing light and dark themes, already included in the project*/
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark",
      leaderboardLoaded: false,
      hasPermissionsShared: true,
      isViewingRewards: false
    };
  }

  componentDidMount() {
    //Check if user hasPermissionsShared here?
  }

  /*Swiftly appends an invisible textarea into the dom, copies it to the clipboard and removes it*/
  copyReferralLink(text, e) {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  }

  /*Handles Tab Switching between Sharing and the Leaderboard Display*/
  changeTab(tabName, e) {
    let i, tab;

    //Disable/hide the other header-tab that was not selected
    if (tabName === "share") {
      document.getElementById("leaderboard").style.display = "none";
    } else if (tabName === "leaderboard") {
      document.getElementById("share").style.display = "none";

      //Checks if a user has actively loaded the component before, if so, we won't rerender
      if (!this.state.leaderboardLoaded) {
        this.setState({ leaderboardLoaded: true });
      }
    }

    //Select all of the header-tabs and disable them
    tab = document.getElementsByClassName("header-tab");
    for (i = 0; i < tab.length; i++) {
      tab[i].className = tab[i].className.replace(" active", "");
    }

    //Shows the current tab's content, and sets it active
    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " active";
  }

  //Callback function to close instruction dialog window
  handleClosingPermissions(event) {
    this.setState({ hasPermissionsShared: true });
  }

  //Callback function to close the rewards dialog window
  handleClosingRewards() {
    this.setState({ isViewingRewards: false });
  }

  render() {
    /*Testing whitespace on a really long link*/
    let referralLinkText = "https://twxt.tv/Mzk3OTQzODg6MTIxNzM5MDI2";

    return (
      <div className="App">
        {/*Tab buttons to switch between sharing to leaderboard view*/}
        <header>
          <button
            id="default-tab"
            className={"header-tab active"}
            onClick={e => this.changeTab("share", e)}
          >
            Share
          </button>
          <button
            className={"header-tab"}
            onClick={e => this.changeTab("leaderboard", e)}
          >
            Leaderboard
          </button>
        </header>

        {/*Container for main panel content, displayed when share is the active tab*/}
        <div
          id="share"
          className={
            this.state.theme === "light" ? "share-panel-light" : "share-panel-dark"
          }
        >
          {/*Conditional Overlays*/}
          <RewardsOverlay
            isViewingRewards={this.state.isViewingRewards}
            onClosingRewards={() => this.handleClosingRewards()}
          />
          <PermissionsOverlay
            hasPermissionsShared={this.state.hasPermissionsShared}
            onClosingPermissions={() => this.handleClosingPermissions()}
          />

          {/*Displays referral link with some text headings, generate link and render it through the component*/}
          <div id={this.state.theme === "light" ? "referral-header-light" : "referral-header-dark"}>
            Your referral link
          </div>

          <ReferralLink referralProp={referralLinkText} />

          <div id={this.state.theme === 'light' ? "referral-caption-light" : "referral-caption-dark"}>Earn points for sharing the stream!</div>

          {/*Share options are containers for the Copy Button, Reward Screen Button, and Social Media Links. It is encased in a 3 column layout.*/}
          <div id="share-options-row">
            <div id="share-options-column">
              <button
                className={this.state.theme === "light" ? "share-button-light" : "share-button-dark"}
                onClick={e => this.copyReferralLink(referralLinkText, e)}
              >
                Copy
              </button>
            </div>

            <div id="share-options-column" style={{ textAlign: 'center' }}>
              <button
                className={this.state.theme === "light" ? "share-button-light" : "share-button-dark"}
                href="#"
                onClick={() => {
                  this.setState({ isViewingRewards: true });
                }}
              >
                Rewards
            </button>
            </div>
            <div id="share-options-column">
              <div className="social-link">
                <img className="social-icon" src={fb} width="20" height="20" />
              </div>
              <div className="social-link"  >
                <img className="social-icon" src={twit} width="20" height="20" />
              </div>
            </div>
          </div>

          <footer>
            <a
              id="change-permissions"
              className={
                this.state.theme === "light" ? "link-light" : "link-dark"
              }
              href="#"
              onClick={() => {
                this.setState({ hasPermissionsShared: false });
              }}
            >
              Change Permissions
            </a>
          </footer>
        </div>

        {/*Container for Leaderboard content, displayed when Leaderboard is the active tab*/}
        <div
          id="leaderboard"
          className={
            this.state.theme === "light" ? "leaderboard-light" : "leaderboard-dark"
          }
        >
          {/* 
          <div>
            {this.state.leaderboardLoaded ? (
              <Leaderboard theme={this.state.theme} />
            ) : (
                <div>{null}</div>
              )}
          </div>

 */}

          <ConfigPage theme={this.props.theme} />


        </div>
      </div >
    );
  }
}
