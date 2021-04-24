import React, { Component } from 'react';
class Footer extends Component {
    state = { time: new Date() }
    render() {
        return (
            <div className="footer">
                <p>&copy; HULU </p>
                <p> {this.state.time.toDateString()}</p>
            </div>
        );
    }
}

export default Footer;