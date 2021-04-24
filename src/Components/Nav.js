import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    changeTheme = () => {
        const moon = document.querySelector('.fa-sun');
        moon.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        })
    }

    render() {
        return (
            <nav>
             <h1>HULU</h1>
                <ul>
                    <li>
                        <Link className="link" to="/home">Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="/hulumovies">Movies</Link>
                    </li>
                    <li className="link">
                        <span>
                            <i className="fa fa-sun" onClick={this.changeTheme}></i>
                        </span>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;