import React, {Component} from 'react';

class Navbar extends Component {

    render() {
        return (
            <div className="App">
            {/* User NavLink instead with custom CSS if time */}
                <nav class="nav">
                    <a class="nav-link " href="/">Add User</a>
                    <a class="nav-link" href="/user">User Info</a>
                </nav>
            </div>
        );
    }
}

export default Navbar;
