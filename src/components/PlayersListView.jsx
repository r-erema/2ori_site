import React from 'react';
import Player from './PlayerView.jsx';

export default class PlayersListView extends React.Component {

    render() {
        let {players, onAddPlyer} = this.props;
        return players.map(player => <Player player={player} key={player.id} />);
    }

}