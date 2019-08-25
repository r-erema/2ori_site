import React from 'react';
import {connect} from "react-redux";
import PlayerView from "../views/PlayerView.jsx";
import {updatePlayerNameAction, updatePlayerTeamsCountAction} from "../../actions";
import {players} from "../../reducers";

const mapStateToProps= (state) => {
    return {
        players: players(state.players),
        tourneyTeamsCount: state.tourneyTeamsCount
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updatePlayerName: (playerId, name) =>{
            dispatch(updatePlayerNameAction(playerId, name))
        },
        updatePlayerTeamsCount: (playerId, teamsCount, tourneyTeamsCount, previousTeamsCount) => {
            dispatch(updatePlayerTeamsCountAction(playerId, teamsCount, tourneyTeamsCount, previousTeamsCount))
        }
    };
};

const PlayerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerView);

export default PlayerContainer;