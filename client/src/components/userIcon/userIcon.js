import React from "react";
import "./userIcon_style.css";

class UserIcon extends React.Component {
  render() {
    return (
      <div className="user-icon">
        <div className="user-icon-icon">
          <img
            src={require("../../assets/images/" + this.props.icon)}
            alt="img"
          ></img>
        </div>
        <div className="user-icon-username">
          {this.props.host ? (
            <span className="user-name-crown">
              <img
                src={require("../../assets/images/crown.png")}
                alt="crown"
              ></img>
            </span>
          ) : (
            undefined
          )}
          {this.props.isDashboard ? (
            <span className="dashboard-welcome">
              {"Welcome back, "}
              <span className="dashboard-username">{this.props.username}</span>
              <span>{"!"}</span>
            </span>
          ) : (
            this.props.username
          )}
          {this.props.host ? (
            <span className="user-name-spacer" />
          ) : (
            undefined
          )}
        </div>
      </div>
    );
  }
}

export default UserIcon;
