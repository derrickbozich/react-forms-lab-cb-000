import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }

  handleInputChange = event =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name='tweet' value={this.state.tweet} onChange={event => this.handleInputChange(event)} />
      </div>
    );
  }
}

export default TwitterMessage;
