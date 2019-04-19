import React from 'react';
import {players} from "../reducers";
import {connect} from "react-redux";
import PlayersListView from "./PlayersListView.jsx";
import {addPlayerAction} from "../actions";

const mapStateToProps= (state) => {
    return {
        players: players(state.players)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPlayer: () => {
            dispatch(addPlayerAction())
        }
    };
};

const PlayersListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayersListView);

export default PlayersListContainer;