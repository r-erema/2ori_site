import React from 'react';
import {players} from "../../reducers";
import {connect} from "react-redux";
import RequiredTeamsListView from "../views/RequiredTeamsListView.jsx";
import {addRequiredTeamControl} from "../../actions";

const mapStateToProps = (state) => {
    return {
        players: players(state.players, state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addRequiredTeamControl: (playerId) => {
            dispatch(addRequiredTeamControl(playerId))
        }
    };
};

const RequiredTeamsListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RequiredTeamsListView);

export default RequiredTeamsListContainer;