import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser, secret } from '../../actions/actions';
import { Field, reduxForm } from 'redux-form';
import '../../styles/theme.css'

class Login extends Component {

  submit = values => {
    // console.log(values);
    this.props.loginUser(values, this.props.history);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Fragment>
        <div className="login-form">
          <form onSubmit={ handleSubmit(this.submit) }>
            <Field name='email' component='input' type='email' placeholder='email'/>
            <Field name='password' component='input' type='password' placeholder='password'/>
            <button type="submit">Submit</button>
          </form>
            <button className="button is-primary" onClick={e => this.props.secret() }>Secret</button>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loginUser,
    secret
  }, dispatch)
}

Login = reduxForm({
  form: 'loginForm'
})(Login);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

