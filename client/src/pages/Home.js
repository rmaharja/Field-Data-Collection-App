import React, {Component} from 'react';
import JumboTron from "../components/Jumbotron";
import {Col, Row, Container} from "../components/Grid";

class Home extends Component {
    state = {
        users: [],
        userName: null,
        fullName: null,
        phoneNumber: null,
        device: {}
    }
    componentWillMount() {
        this.setState({
            device: {
                deviceType: "Android",
                deviceModel: "LG V20",
                name: "Rohit's LG V20"
            }
        })
        console.log("this.state.device", this.state.device)

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
        let deviceOBject = {
            deviceType: "Android",
            deviceModel: "LG V20",
            name: "Rohit's LG V20"
        }

        if (this.state.userName && this.state.fullName && this.state.phoneNumber) {
            console.log("All Form Data entered!");
            if (this.state.device) {
                console.log("All Device Information Captured");
                console.log("Current State: ", this.state);
            } else {
                console.log("Failed to capture all Device Info!");
            }
        } else {
            alert("Please fill out all your info!");
        }

    } //end of handleSubmit

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
                </Container>
            </div>
        );
    }
}

export default Home;
