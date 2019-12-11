import React from 'react';
import {players} from "../../reducers";
import {connect} from "react-redux";
import RequiredTeamsListView from "../views/RequiredTeamsListView.jsx";
import {addRequiredTeamControl, changeRequiredTeam} from "../../actions";

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
        changeRequiredTeamToPlayer: (playerId, newTeamId, teamIdToChange) => {
            dispatch(changeRequiredTeam(playerId, newTeamId, teamIdToChange))
        }
    };
};

const RequiredTeamsListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RequiredTeamsListView);

export default RequiredTeamsListContainer;