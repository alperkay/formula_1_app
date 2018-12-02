import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getSeasonsDrivers } from '../actions/getSeasonsDriversAction';
import { getWinner } from '../actions/getWinnerAction';
import { clearState } from '../actions/clearStateAction';
import { addFavorite } from '../actions/favoritesAction';

import BackIcon from './BackIcon';
import AddIcon from './AddIcon';
import TrophyIcon from './TrophyIcon';

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
        <Link to="/">
          <h2>
            <BackIcon />
            Season {this.props.match.params.id}
          </h2>
        </Link>
        <ul>
          {allDrivers.map(driver => (
            <li
              key={driver.driverId}
              onClick={() => this.props.addFavorite(driver)}
              style={{
                fontWeight: driver.driverId === winner.driverId ? 'bold' : null
              }}
            >
              {driver.givenName} {driver.familyName}
              {driver.driverId === winner.driverId ? <TrophyIcon /> : null}
              <AddIcon />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

SingleSeason.PropTypes = {
  allDrivers: PropTypes.array.isRequired,
  winner: PropTypes.object.isRequired,
  getSeasonsDrivers: PropTypes.func.isRequired,
  getWinner: PropTypes.func.isRequired,
  clearState: PropTypes.func.isRequired,
  addFavorite: PropTypes.func.isRequired
};

const MapStateToProps = state => ({
  allDrivers: state.allDrivers,
  winner: state.winner
});

export default connect(
  MapStateToProps,
  { getSeasonsDrivers, getWinner, clearState, addFavorite }
)(SingleSeason);
