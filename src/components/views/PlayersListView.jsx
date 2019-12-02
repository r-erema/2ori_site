import React from 'react';
import PlayerContainer from '../containers/PlayerContainer.jsx';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import {withStyles} from "@material-ui/styles";

const styles = theme => ({
    root: {
        '& > *': {
            margin: 10,
        },
    },
});

class PlayersListView extends React.Component {
    render() {
        let {players, tourneyTeamsCount, addPlayer, classes} = this.props;
        return <div className={classes.root} >
            <Button variant="contained" color="primary" onClick={() => addPlayer(tourneyTeamsCount)} >
                <AddIcon />
                Add player
            </Button>
            {players.map(player => <PlayerContainer player={player} key={player.id} />)}
        </div>;
    }
}


export default withStyles(styles)(PlayersListView);