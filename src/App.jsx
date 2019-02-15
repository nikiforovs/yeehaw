
import React, { Component } from 'react';

import axios from 'axios';

import './App.css';
import logo from './logo.svg';

import Footer from './components/footer';
import { Header, Header2 } from './components/header';
import Main from './components/main';
import { getUserList } from './util/service-helper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      date: new Date()
    };
  }

  // COMPONENT LIFE CYCLE
  componentDidMount() {
    this.getUsers();
  }

  // SERVICE CALL FUNCTIONS
  getUsers = () => {
    console.log('INITIAL STATE VALUES');
    console.log(this.state.userList);

    getUserList().then(res => {
      console.log('SERVICE RESPONSE');
      console.log(res);

      let users = res.data.data;

      this.setState({ userList: users });

      console.log('UPDATED STATE VALUE');
      console.log(this.state.userList);
    }
    );
  }

  // ETC FUNCTIONS
  tick() {
    console.log('CALLED TICK METHOD');
    this.setState({
      date: new Date()
    });
  }

  render() {
    // let name = "Chai";
    return (
      <div className="App">

        <Header date={this.state.date.toLocaleTimeString()} />
        <Header2 />
        <Main />
        <Footer />

      </div>
    );
  }
}

export default App;
