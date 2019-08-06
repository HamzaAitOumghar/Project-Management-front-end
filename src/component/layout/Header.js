import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary mb-4">
                <div className="container">
                    <a className="navbar-brand" href="#">Project Management</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">
                                <a className="nav-link" href="/dashboard">Dashboard</a>
                            </li>

                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ">
                                <a className="nav-link" href="#">Sign Up</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Header;