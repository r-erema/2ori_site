import React from 'react';
import {connect} from "react-redux";
import PlayerView from "./PlayerView.jsx";
import {makePlayerNameEditableAction, updatePlayerNameAction, updatePlayerTeamsCountAction} from "../actions";
import {players} from "../reducers";

const mapStateToProps= (state) => {
    return {
        players: players(state.players)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        switchPlayerNameEditMode: (playerId) => {
            dispatch(makePlayerNameEditableAction(playerId))
        },
        updatePlayerName: (playerId, name) =>{
            dispatch(updatePlayerNameAction(playerId, name))
        },
        updatePlayerTeamsCount: (playerId, teamsCount) => {
            dispatch(updatePlayerTeamsCountAction(playerId, teamsCount))
        }
    };
};

const PlayerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerView);

export default PlayerContainer;