import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSingleSeason } from '../actions/getSingleSeasonAction';

class SingleSeason extends Component {
  componentDidMount() {
    this.props.getSingleSeason(this.props.match.params.id);
  }
  render() {
    return <div>Season: {this.props.match.params.id}</div>;
  }
}

export default connect(
  null,
  { getSingleSeason }
)(SingleSeason);
