import React, { Component } from 'react';

const API = 'https://acceptance.int-my.raremark.com/api/v1/registration/consents';

class ConsentsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {consents: []};
  }

  componentDidMount() {
    let _ = require('underscore')
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ consents: _.sample(data.data,2)}))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    return (
      <div>   
        <ConsentsList consents={this.state.consents} />
      </div>
    );
  }

}

class ConsentsList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.consents.map(item => (
          <div key={item.id}>
          <h3>{item.attributes.heading}</h3>
          <small>{item.attributes.summary}</small>
          </div>
        ))}
      </ul>
    );
  }
}

export default ConsentsApp;