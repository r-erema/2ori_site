import React from 'react';
import PlayerContainer from '../containers/PlayerContainer.jsx';

import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';


export default class PlayersListView extends React.Component {

    render() {
        let {players, tourneyTeamsCount, addPlayer} = this.props;

        return <div>
            <Button variant="contained" color="primary" onClick={() => addPlayer(tourneyTeamsCount)} >
                <AddIcon />
                Add player
            </Button>
            {players.map(player => <PlayerContainer player={player} key={player.id} />)}
        </div>;
    }

}