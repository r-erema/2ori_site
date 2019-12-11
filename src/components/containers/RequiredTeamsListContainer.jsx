import React from 'react';
import {players} from "../../reducers";
import {connect} from "react-redux";
import RequiredTeamsListView from "../views/RequiredTeamsListView.jsx";
import {addRequiredTeamControl, addRequiredTeamToPlayer} from "../../actions";

const mapStateToProps = (state) => {
    return {
        players: players(state.players, state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addRequiredTeamControl: (playerId) => {
            dispatch(addRequiredTeamControl(playerId))
        },
        addRequiredTeamToPlayer: (playerId, teamId) => {
            console.log(playerId, teamId);
            dispatch(addRequiredTeamToPlayer(playerId, teamId))
        }
    };
};

const RequiredTeamsListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RequiredTeamsListView);

export default RequiredTeamsListContainer;