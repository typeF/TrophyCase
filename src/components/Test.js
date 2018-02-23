import React, { Component, Fragment } from 'react';
import '../styles/theme.scss'

class Test extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <span>User id is: {this.props.match.params.id}</span>
          <button className="button is-primary" onClick={e => this.test()}>Check</button>
        </div>
      </Fragment>
    )
  }
}

export default Test;