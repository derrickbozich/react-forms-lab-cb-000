import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweet} onChange={event => this.setState({ tweet: event.target.value})} />
      </div>
    );
  }
}

export default TwitterMessage;
