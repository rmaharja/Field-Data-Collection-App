import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import  DeleteBtn  from "../components/DeleteBtn/DeleteBtn.js";

class AllUsers extends Component {
  state = {
    users: []

  };

  render() {
    return (
      <div className="allUsers">
      <Jumbotron>
        <h1>All Users (Sorted by time) </h1>
      </Jumbotron>
      {this.state.users.length ? (
        <List>
          {this.state.users.map(user => (
            <ListItem key={user._id}>
              <Link to={"/user/" + user._id}>
                  <strong>Name: </strong> {user.fullName}
                  <strong>Device Type: </strong> {user.device.deviceType}
                  <strong>Device Model: </strong> {user.device.deviceModel}
              </Link>
              <DeleteBtn onClick={() => this.deleteuser(user._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>No Results to Display</h3>
      )}
      </div>

    )
  }
}

export default AllUsers;