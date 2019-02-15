import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Main extends Component {
    render() {
        console.log('THIS.PROPS');
        console.log(this.props);
        let userList = this.props.userList;
        return (
            <div className='main'>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est diam, bibendum eu mi nec, semper lacinia enim. Pellentesque placerat porta ullamcorper. In et lectus pretium, mattis dolor consequat, consectetur sapien. Suspendisse potenti. Class aptent.</p> */}
                <h2>Team Members</h2>
                <div className='user-list-panel'>
                    <ul className="user-list">
                        {userList.map(user => {
                            return (
                                <li key={user.id}>
                                    <user key={user.id} avatar={user.avatar}
                                        firstName={user.first_name} lastName={user.last_name} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

Main.propTypes = {
    userList: PropTypes.array
}

export default Main;

