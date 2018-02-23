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
          <div className="banner">
            <div className='logo'><a href="/">Trophy Case</a></div>
            <div className="auth-links">
              <span><Link to="/register">Register</Link></span>
              <span><Link to="/login">Login</Link></span>
              <span><Link to="/private">Private</Link></span>
              <span><Link to="/test">Test</Link></span>
            </div>
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
