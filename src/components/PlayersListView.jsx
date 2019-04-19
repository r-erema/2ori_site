import React from 'react';
import Player from './PlayerView.jsx';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default class PlayersListView extends React.Component {

    render() {
        let {players, addPlayer} = this.props;

        return <div>
            <Fab color="primary" aria-label="Add" onClick={addPlayer} >
                <AddIcon />
            </Fab>
            {players.map(player => <Player player={player} key={player.id} />)}
        </div>;
    }

}