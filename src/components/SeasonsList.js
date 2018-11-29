import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class SeasonsList extends Component {
  createSeasonsList = () => {
    let list = [];
    for (let i = 2009; i < 2019; i++) {
      list.push(
        <li key={i}>
          <Link to={`/seasons/${i}`}>{i}</Link>
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

export default SeasonsList;
