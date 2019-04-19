import React from 'react';
import {players} from "../reducers";
import {connect} from "react-redux";
import PlayersListView from "./PlayersListView.jsx";

const mapStateToProps= (state) => {
    return {
        players: players(state.players)
    };
};

const PlayersListContainer = connect(
    mapStateToProps,
)(PlayersListView);

export default PlayersListContainer;