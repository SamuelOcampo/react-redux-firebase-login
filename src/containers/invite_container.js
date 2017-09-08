import React, { Component } from 'react';

export default class InviteContainer extends Component {

  constructor() {
    super();
    this.state = {
      name: ''
    };
    console.log(this);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="container">
        Invite Container
      </div>
    );
  }
}
