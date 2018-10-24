import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      password: ''
    };
  }

  handleInputChange = event =>{
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event =>{
    let loginInfo = (this.props.username != '' && this.props.password != '' ) ?

    {this.props.onSubmit({this.state.username, this.state.password})}
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={event => this.handleInputChange(event)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.username}
              onChange={event => this.handleInputChange(event)}
            />
          </label>
        </div>
        <div>
          <button type="submit" onSubmit={this.handleSubmit}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
