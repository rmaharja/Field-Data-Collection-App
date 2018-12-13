import React, {Component} from 'react';
import JumboTron from "../components/Jumbotron.js";

class Home extends Component {
    state = {
        userName: null
    }
    handleOnChange = (e) => {

        //pulling id and value from e.target
        let {id, value} = e.target;

        //setting the value to the state
        this.setState({[id]: value})
        console.log("onChange", this.state);
    }
    handleSubmit = (e) => {
        e.preventDefault();

        console.log("This.state: ", this.state)
    }

    render() {
        return (
            <div className="home">
                <JumboTron>Please fill out information below:</JumboTron>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <label htmlFor="userName" style={{paddingRight: "10px"}}>User Name</label>
                            <input type="text" id="userName" onChange={this.handleOnChange}/>
                        </div>
                        <br/>
                        <div className="form-row">
                            <label htmlFor="name" style={{paddingRight: "10px"}}>Name</label>
                            <input type="number" id="name" onChange={this.handleOnChange}/>
                        </div>
                        <br/>
                        <div className="form-row">
                            <label htmlFor="phoneNumber" style={{paddingRight: "10px"}}>Phone Number</label>
                            <input type="text" id="phoneNumber" onChange={this.handleOnChange} max="10"/>
                        </div>
                        <br/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Home;
