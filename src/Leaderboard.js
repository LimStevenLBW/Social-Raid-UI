import React, { Component } from "react";
import "./Leaderboard.css";
import logo from "./Images/logo.png";

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: props.theme,
      activeList: []
    };

    /*Define filter categories here, alltime is displayed by default*/
    var alltime;
    var weekly;
    var daily;
  }

  //Creates lists for each filter category by database query
  createLists() {
    //Test data for arrays of json objects
    //They should be replaced by queries for the relevant information, sorted
    this.alltime = [
      { display_name: "banana", referrals: 100000, avatar: "" },
      { display_name: "blueberry", referrals: 90000, avatar: "" },
      {
        display_name: "this is a really long name",
        referrals: 80000,
        avatar: ""
      },
      { display_name: "banana", referrals: 100000, avatar: "" },
      { display_name: "blueberry", referrals: 90000, avatar: "" },
      {
        display_name: "this is a really long name",
        referrals: 80000,
        avatar: ""
      },
      { display_name: "banana", referrals: 100000, avatar: "" },
      { display_name: "blueberry", referrals: 90000, avatar: "" },
      {
        display_name: "this is a really long name",
        referrals: 80000,
        avatar: ""
      },
      {
        display_name: "this is a really long name",
        referrals: 80000,
        avatar: ""
      }
    ];

    this.weekly = [
      { display_name: "mock data", referrals: 100, avatar: "" },
      { display_name: "mock data", referrals: 90, avatar: "" },
      { display_name: "this is a really long name", referrals: 80, avatar: "" }
    ];

    this.daily = [
      { display_name: "Moopaloo", referrals: 10, avatar: "" },
      { display_name: "PaytonGarlandTV", referrals: 9, avatar: "" },
      { display_name: "woozymango", referrals: 8, avatar: "" },
      { display_name: "basedLucas", referrals: 5, avatar: "" },
      { display_name: "ziggySmalls", referrals: 2, avatar: "" }
    ];

    this.alltime = this.listFiller(this.alltime).slice();
    this.weekly = this.listFiller(this.weekly).slice();
    this.daily = this.listFiller(this.daily).slice();
  }

  //The list needs to display 10 entries, if there isn't enough users, fill with empty space instead
  listFiller(listToFill) {
    const emptyJSON = {
      display_name: <div>&nbsp;</div>,
      referrals: <div>&nbsp;</div>,
      rank: <div>&nbsp;</div>,
      avatar: ""
    };
    let i;

    for (i = 0; i < listToFill.length; i++) {
      listToFill[i].rank = i + 1;
    }

    while (listToFill.length < 10) {
      listToFill.push(emptyJSON);
    }
    return listToFill;
  }

  /*When a user selects a filter, a new query is executed and the data is changed*/
  changeTab(tabName, e) {
    let i, tab;

    //All of the selectable filters are disabled
    if (this.state.theme === "light") {
      tab = document.getElementsByClassName("filter-button-light");
    } else {
      tab = document.getElementsByClassName("filter-button-dark");
    }
    for (i = 0; i < tab.length; i++) {
      tab[i].className = tab[i].className.replace(" active", "");
    }

    //Shows the current tab's content, and sets it active, updating the state
    if (tabName === "all-time") {
      this.setState({ activeList: this.alltime });
    } else if (tabName === "weekly") {
      this.setState({ activeList: this.weekly });
    } else if (tabName === "daily") {
      this.setState({ activeList: this.daily });
    }
    e.currentTarget.className += " active";
  }

  //Lifecycle Methods
  //If the component mounted, update the state data with the list of top users
  componentDidMount() {
    console.log("componentDidMount baby");
    this.createLists();
    this.setState({ activeList: this.alltime });
  }

  render() {
    return (
      <div className="Leaderboard">
        <div
          className={
            this.state.theme === "light"
              ? "row-light titles-light"
              : "row-dark titles-dark"
          }
        >
          <div className="column rank">&nbsp;</div>
          <div className="column user">User</div>
          <div className="column score">Referred</div>
        </div>

        <div id="scroll-container">
          <div id="scroll-helper">
            {this.state.activeList.map(obj => {
              return (
                <div
                  className={
                    this.state.theme === "light" ? "row-light" : "row-dark"
                  }
                >
                  <div className="column rank">{obj.rank}</div>
                  <div className="column user">
                    <img
                      className={
                        this.state.theme === "light"
                          ? "row-img-light"
                          : "row-img-dark"
                      }
                      src={logo}
                      alt="row-img"
                    />
                    {obj.display_name}
                  </div>
                  <div className="column score">{obj.referrals}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={
            this.state.theme === "light"
              ? "leaderboard-footer-light"
              : "leaderboard-footer-dark"
          }
        >
          <div className="filter-tab">
            <button
              id="all-time"
              className={
                this.state.theme === "light"
                  ? "filter-button-light active"
                  : "filter-button-dark active"
              }
              onClick={e => this.changeTab("all-time", e)}
            >
              All-Time
            </button>
            <button
              id="weekly"
              className={
                this.state.theme === "light"
                  ? "filter-button-light"
                  : "filter-button-dark"
              }
              onClick={e => this.changeTab("weekly", e)}
            >
              Weekly
            </button>
            <button
              id="daily"
              className={
                this.state.theme === "light"
                  ? "filter-button-light"
                  : "filter-button-dark"
              }
              onClick={e => this.changeTab("daily", e)}
            >
              Today
            </button>
          </div>

          {/*}<img className = {this.state.theme === 'light' ? "avatar-light" : "avatar-dark"} src={logo} alt = "user_avatar"></img> */}
          <div
            className={
              this.state.theme === "light" ? "refCount-light" : "refCount-dark"
            }
          >
            username, You made 2 referrals today!
          </div>
        </div>
      </div>
    );
  }
}

export default Leaderboard;
