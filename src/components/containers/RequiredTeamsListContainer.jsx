import React from 'react';
import {players} from "../../reducers";
import {connect} from "react-redux";
import RequiredTeamsListView from "../views/RequiredTeamsListView.jsx";
import {addRequiredTeam} from "../../actions";

const mapStateToProps = (state) => {
    return {
        players: players(state.players, state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addRequiredTeam: (playerId) => {
            dispatch(addRequiredTeam(playerId))
        }
    };
};

const RequiredTeamsListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RequiredTeamsListView);

export default RequiredTeamsListContainer;