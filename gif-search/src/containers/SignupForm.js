import React, { Component } from "react";
import { connect } from "react-redux";
import { signup } from "../actions";

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Please enter an email.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Please enter a password.";
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = "Please enter a password confirmation.";
  }

  if (values.password !== values.passwordConfirmation) {
    errors.password = "Passwords do not match";
  }

  return errors;
};

class signupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    let { name, email, password } = this.state;
    this.props.signup(name, email, password);
    this.setState({
      email: "",
      password: ""
    });
  }
  render() {
    let { name, email, password } = this.state;
    let { isSignUpPending, isSignUpSuccess, SignUpError } = this.props;
    return (
      <form name="signupForm" onSubmit={this.onSubmit}>
        <div className="form-group">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              onChange={e => this.setState({ name: e.target.value })}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={e => this.setState({ email: e.target.value })}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={e => this.setState({ password: e.target.value })}
              value={password}
            />
          </div>
        </div>

        <input type="submit" value="Sign Up" />

        {isSignUpPending && <div>Please wait...</div>}
        {isSignUpSuccess && <div>Success.</div>}
        {SignUpError && <div>{SignUpError.message}</div>}
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignUpPending: state.isSignUpPending,
    isSignUpSuccess: state.isSignUpSuccess,
    SignUpError: state.SignUpError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (name, email, password) => dispatch(signup(name, email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(signupForm);
