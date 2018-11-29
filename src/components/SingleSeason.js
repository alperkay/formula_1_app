import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSeasonsDrivers } from '../actions/getSeasonsDriversAction';
import { getWinner } from '../actions/getWinnerAction';
import { clearState } from '../actions/clearStateAction';
import { addFavorite } from '../actions/favoritesAction';

class SingleSeason extends Component {
  componentDidMount() {
    this.props.getSeasonsDrivers(this.props.match.params.id);
    this.props.getWinner(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearState();
  }

  render() {
    const { allDrivers, winner } = this.props;
    return (
      <div className="drivers_list">
        <h2>Season {this.props.match.params.id}</h2>
        <ul>
          {allDrivers.map(driver => (
            <li
              key={driver.driverId}
              onClick={() => this.props.addFavorite(driver)}
              style={{
                backgroundColor:
                  driver.driverId === winner.driverId ? '#FFFF00' : null
              }}
            >
              {driver.givenName} {driver.familyName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const MapStateToProps = state => ({
  allDrivers: state.allDrivers,
  winner: state.winner
});

export default connect(
  MapStateToProps,
  { getSeasonsDrivers, getWinner, clearState, addFavorite }
)(SingleSeason);
