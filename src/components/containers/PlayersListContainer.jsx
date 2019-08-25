import React from 'react';
import {players} from "../../reducers";
import {connect} from "react-redux";
import PlayersListView from "../views/PlayersListView.jsx";
import {addPlayerAction} from "../../actions";

const mapStateToProps = (state) => {
    return {
        players: players(state.players, state),
        tourneyTeamsCount: state.tourneyTeamsCount
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPlayer: (tourneyTeamsCount) => {
            dispatch(addPlayerAction(tourneyTeamsCount))
        }
    };
};

const PlayersListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayersListView);

export default PlayersListContainer;