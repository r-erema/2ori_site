import React from 'react';
import RequiredTeamsListContainer from "../containers/RequiredTeamsListContainer.jsx";
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

export default class PlayerView extends React.Component {

    render() {
        const {
            player,
            updatePlayerName,
            updatePlayerTeamsCount,
            tourneyTeamsCount
        } = this.props;
        return (
            <div>
                <div style={{marginBottom: 20}} >
                    <TextField
                        id="outlined-name"
                        label="Player name"
                        value={player.name}
                        onChange={(event) => {updatePlayerName(player.id, event.target.value)}}
                        margin="normal"
                        variant="outlined"
                    />
                </div>


                <div style={{marginBottom: 20}} >
                    <TextField
                        label="Teams count"
                        type="number"
                        inputProps={{ min: 1 }}
                        value={player.teamsCount}
                        variant="outlined"
                        onChange={(event) => {updatePlayerTeamsCount(player.id, event.target.value, tourneyTeamsCount, player.teamsCount)}}
                    />
                    </div>

                <div style={{marginBottom: 20}} >
                    <RequiredTeamsListContainer  player={player} />
                </div>

                <Divider />

            </div>
        );
    }

}
