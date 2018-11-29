import React, { Component } from 'react';
import { getSeasons } from '../actions/seasonsAction';
import { connect } from 'react-redux';

class SeasonsList extends Component {
  componentDidMount() {
    this.props.getSeasons();
  }

  createSeasonsList = () => {
    let list = [];
    for (let i = 2009; i < 2019; i++) {
      list.push(
        <li key={i} onClick={() => console.log('hey')}>
          {i}
        </li>
      );
    }
    return list;
  };

  render() {
    return (
      <div>
        <ol>{this.createSeasonsList()}</ol>
      </div>
    );
  }
}

export default connect(
  null,
  { getSeasons }
)(SeasonsList);
