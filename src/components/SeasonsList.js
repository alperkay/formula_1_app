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
      <div className="seasons_list">
        <h2>Seasons</h2>
        <ul>{this.createSeasonsList()}</ul>
      </div>
    );
  }
}

export default SeasonsList;
