import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../styles/App.css';

class MainCard extends Component {
  render() {

    const { caseUrl, caseTitle, username, caseBlurb, caseType } = this.props;

    return (
      <router>
          <div class="main-card-container">
            <div class="main-card-image"></div>
            <div class="main-card-info">
              <div class="main-card-title"></div>
              <div class="main-card-name"></div>
              <div class="main-card-blurb"></div>
              <div class="main-card-type"></div>
            </div>
          </div>
      </router>
    );
  }
}

function mapstatetoprops(state) {
  return {
  }
}

function mapdispatchtoprops(dispatch) {
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapstatetoprops, mapdispatchtoprops)(MainCard);
