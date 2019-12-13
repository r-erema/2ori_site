import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import RequiredTeamsListContainer from "../containers/RequiredTeamsListContainer.jsx";
import TextField from '@material-ui/core/TextField';
import {withStyles} from "@material-ui/styles";
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        '& > *': {
            "margin-bottom": "5%",
        },
    },
});

class PlayerView extends React.Component {

    render() {
        const {
            player,
            updatePlayerName,
            updatePlayerTeamsCount,
            tourneyTeamsCount,
            classes
        } = this.props;
        return (
            <div>
                <div className={classes.root} >
                    <TextField
                        id="outlined-name"
                        label="Player name"
                        value={player.name}
                        onChange={(event) => {updatePlayerName(player.id, event.target.value)}}
                        margin="normal"
                        variant="outlined"
                    />
                </div>


                <div className={classes.root}>
                    <TextField
                        label="Teams count"
                        type="number"
                        inputProps={{ min: 1 }}
                        value={player.teamsCount}
                        variant="outlined"
                        onChange={(event) => {updatePlayerTeamsCount(player.id, event.target.value, tourneyTeamsCount, player.teamsCount)}}
                    />
                    </div>

                <div className={classes.root} >
                    <RequiredTeamsListContainer  player={player} />
                </div>

                <Divider />

            </div>
        );
    }

}

export default withStyles(styles)(PlayerView);
