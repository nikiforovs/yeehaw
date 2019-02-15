import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className = 'header'>
                <h2>yeehaw?</h2>
                <p>{this.props.date}</p>
            </div>
        );
    }
}

class Header2 extends Component {
    render() {
        return (
            <h2>yeehaw.</h2>
        );
    }
}

// export default Header;
export {
    Header,
    Header2
}