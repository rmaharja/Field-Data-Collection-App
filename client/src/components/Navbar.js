import React, {Component} from 'react';

class Navbar extends Component {

    render() {
        return (
            <div className="App">
            {/* User NavLink instead with custom CSS if time */}
                <nav className="nav">
                    <a className="nav-link " href="/">Add User</a>
                    <a className="nav-link" href="/user">Display Users</a>
                </nav>
            </div>
        );
    }
}

export default Navbar;
