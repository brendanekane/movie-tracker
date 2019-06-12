import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user)
      .then((data) => {
        this.props.history.push('/movies');
      });
  }

  render() {
    return(
      <div className='login-form-container'>
        <form onSubmit={this.handleSubmit} className='login-form'>
          <h5> LOGIN </h5>
          <br/>
          <input type='email'
            placeholder='Email'
            value = {this.state.email}
            onChange={this.update('email')}
            className = 'login-input-email'
          />
          <br/>
          <input type='password'
            placeholder='Password'
            value = {this.state.password}
            onChange={this.update('password')}
            className = 'login-input-password'
          />
        <input className='session-submit' type='submit' value='Login'/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
