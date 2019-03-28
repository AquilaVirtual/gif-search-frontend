import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
//import { login } from '../../actions';
//import Button from '../Misc/button';

const StyledLogin = styled.div`
  display: flex;
  margin-top: 20px;
  form {
    display: flex;
    flex-direction: column;
  }
  input {
    width: 340px;
    height: 40px;
    margin-top: 15px;
    padding: 8px;
    margin-left: 10px;
    border-radius: 2px;
    border: 1px solid #bfbfc0;
    font-size: 1.4rem;
    letter-spacing: 1px;    
    &:focus {
      outline: none;
    }
  }
  button {
    margin-left: 10px;
  }
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login({
      email: this.state.email.trim().toLowerCase(),
      password: this.state.password.trim(),
    }, this.props.history);
    this.setState({
      email: '',
      password: '',
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <StyledLogin>
        <form onSubmit={this.handleSubmit}>
          <input
            type='email'
            name='email'
            placeholder='Email (required)...'
            maxLength='30'
            required
            onChange={this.handleChange}
            value={this.state.email}
          />
          <input
            type='password'
            name='password'
            placeholder='Password (required)...'
            maxLength='15'
            required
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button type='submit' backgroundColor='rgb(34, 170, 61)' title='Login' />
        </form>
      </StyledLogin>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps)(Login);

// import React from 'react';
// import { Field, reduxForm } from 'redux-form';

// class Login extends React.Component {
//   handleFormSubmit = (values) => {
//     console.log(values);
//   };

//   render() {
//     return(
//       <div className="container">
//         <div className="col-md-6 col-md-offset-3">
//           <h2 className="text-center">Log In</h2>
//           <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
//             <fieldset className="form-group">
//               <label>Email</label>
//               <Field name="email" component="input" className="form-control" type="text" placeholder="Email"/>
//             </fieldset>

//             <fieldset className="form-group">
//               <label>Password</label>
//               <Field name="password" component="input" className="form-control" type="password" placeholder="Password"/>
//             </fieldset>

//             <button action="submit" className="btn btn-primary">Sign In</button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default reduxForm({
//   form: 'login'
// })(Login);