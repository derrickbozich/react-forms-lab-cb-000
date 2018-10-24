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
          let loginInfo = (this.props.username != '' && this.props.password != '' ) ?
          <button type="submit" onSubmit={this.props.onSubmit({this.state.username, this.state.password})}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
