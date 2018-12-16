import React, {Component} from 'react';
import JumboTron from "../components/Jumbotron";
import {Col, Row, Container} from "../components/Grid";
import API from "../utils/API";

class Home extends Component {
    state = {
        users: [],
        userName: null,
        fullName: null,
        phoneNumber: null,
        device: null
    }

    componentDidMount() {
        // Loading users from API
        this.loadUsers()
    }

    handleOnChange = (e) => {

        //pulling id and value from e.target
        let {id, value} = e.target;

        //Convert phone number into integer:
        if (id === "phoneNumber") {
            value = parseInt(value);
        }

        //setting the value to the state
        this.setState({[id]: value})
    } //end of handleOnChange

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.userName && this.state.fullName && this.state.phoneNumber) {
            console.log("All Form Data entered!");
            if (this.state.device) {
                console.log("All Device Information Captured");
                console.log("Current State: ", this.state);
                //save to DB
                this.saveUser();
                
            } else {
                console.log("Failed to capture all Device Info Not Saved to the DB! ");
            }
        } else {
            alert("Please fill out all your info!");
        }

    } //end of handleSubmit

    saveUser = () => {
        API.saveUser ({
            userName: this.state.userName,
            fullName: this.state.fullName,
            phoneNumber: this.state.phoneNumber,
            device: this.state.device
        })
        .then (res => this.loadUsers())
        .catch(err => console.log(err));
    }
    loadUsers = () => {
    API.getUsers()
    .then(res => this.setState({
        users: res.data,
        userName: null,
        fullName: null,
        phoneNumber: null,
        device: navigator.platform
     }))
    }

    render() {
        return (
            <div className="home-page">
                <JumboTron>Please fill out information below:</JumboTron>
                <Container>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <label
                                htmlFor="userName"
                                style={{
                                paddingRight: "10px"
                            }}>User Name</label>
                            <input type="text" id="userName" onChange={this.handleOnChange}/>
                        </div>
                        <br/>
                        <div className="form-row">
                            <label
                                htmlFor="fullName"
                                style={{
                                paddingRight: "10px"
                            }}>Name</label>
                            <input type="text" id="fullName" onChange={this.handleOnChange}/>
                        </div>
                        <br/>
                        <div className="form-row">
                            <label
                                htmlFor="phoneNumber"
                                style={{
                                paddingRight: "10px"
                            }}>Phone Number</label>
                            <input
                                type="number"
                                id="phoneNumber"
                                onChange={this.handleOnChange}
                                maxLength="10"/>
                        </div>
                        <br/>
                        <button>Submit</button>
                    </form>
                    <button onClick={this.loadUsers}> Display users</button>
                </Container>
            </div>
        );
    }
}

export default Home;
