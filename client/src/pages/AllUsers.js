import React, {Component} from "react";
import JumboTron from "../components/Jumbotron";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import  DeleteBtn  from "../components/DeleteBtn/DeleteBtn.js";
import API from "../utils/API";


class AllUsers extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    //loading the users to display
    API.getUsers()
    .then(res => this.setState({
        users: res.data,
     }))
  }

  deleteUser = (user) => {
    API.deleteUser(user)
    .then(console.log(`${user} deleted from DB`))
    .catch(err => console.log(err));
  }
  


  render () {
    return (
      <div className="all-users">
      <JumboTron>View Users below (sorted by most recent)</JumboTron>
      {this.state.users.length ?
      <List>
        ( {this.state.users.map(user => (
          <ListItem key={user._id}>
            <Link to={"/user/" + user._id}>
              <strong> User Name: </strong> {user.userName}
              <strong> Full Name: </strong> {user.fullName}
              <strong> Phone Number: </strong> {user.phoneNumber}
              <strong> Device Info: </strong> {user.device}
            </Link>
            <DeleteBtn 
            onClick={() => this.deleteUser(user._id)} />
          </ListItem>
        ))}
      </List>  
        : (<h1>Loading Users...</h1>)
    }
      </div>
    )
  }
}


export default AllUsers;