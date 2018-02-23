import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './styles/App.css';
import Private from './components/authentication/Private';
import Login from './components/authentication/Login';
import Registration from './components/authentication/Registration';
import Test from './components/Test';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <div>
            <nav className="header 1navbar is-warning">
              <div className='1navbar-brand'>
                <img src='./images/logo.svg' className="App-logo" alt="logo2" />
                <div className='1navbar-burger'></div>
              </div>
              <div className='home-link 1navbar-menu is-active'>
                <div className='1navbar-start'>
                  <a className='1navbar-item' href="/">Home</a>
                </div>
              </div>
            </nav>
          </div>

          <div className="nav-links tabs is-right is-boxed is-fullwidth">
            <ul>
              <li> <span><Link to="/">Home</Link></span></li>
              <li> <span><Link to="/register">Register</Link></span></li>
              <li> <span><Link to="/login">Login</Link></span></li>
              <li> <span><Link to="/private">Private</Link></span></li>
              <li> <span><Link to="/test">Test</Link></span></li>
            </ul>
          </div>

          <div className="content">
            <Route path="/register" component={Registration}/>
            <Route path="/private" component={Private}/>
            <Route path="/login" component={Login}/>
            <Route path="/test/:id" component={Test}/>
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
