import React from 'react';
import {CHANGE_TOURNEY_TEAMS_COUNT_ACTION, changeTourneyTeamsCount} from "../actions";
import {tourneyTeamsCount} from "../reducers";
import {connect} from "react-redux";
import TourneyTeamsNumberView from "./TourneyTeamsNumberView.jsx";

const mapStateToProps= (state) => {
    return {
        tourneyTeamsCount: tourneyTeamsCount(state.tourneyTeamsCount, CHANGE_TOURNEY_TEAMS_COUNT_ACTION)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeTourneyTeamsCount: (event) => {
            dispatch(changeTourneyTeamsCount(event.target.value))
        }
    };
};

const TourneyTeamsNumberContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TourneyTeamsNumberView);

export default TourneyTeamsNumberContainer;