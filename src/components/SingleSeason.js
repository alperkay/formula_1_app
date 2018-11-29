import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSeasons } from '../actions/seasonsAction';

class SingleSeason extends Component {
  componentDidMount() {
    this.props.getSeasons(this.props.match.params.id);
  }
  render() {
    return <div>Season: {this.props.match.params.id}</div>;
  }
}

export default connect(
  null,
  { getSeasons }
)(SingleSeason);
