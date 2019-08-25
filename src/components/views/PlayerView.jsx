import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TeamsListContainer from "../containers/TeamsListContainer.jsx";
import IconButton from '@material-ui/core/IconButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';


export default class PlayerView extends React.Component {

    render() {
        const {
            player,
            updatePlayerName,
            updatePlayerTeamsCount,
            tourneyTeamsCount
        } = this.props;
        return (
            <Card>
                <CardContent>

                    <div>
                        <TextField
                            id="outlined-name"
                            label="Name"
                            value={player.name}
                            onChange={(event) => {updatePlayerName(player.id, event.target.value)}}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>

                    <div>
                        <Input
                            label="Teams count:"
                            type="number"
                            inputProps={{ min: 1 }}
                            value={player.teamsCount}
                            onChange={(event) => {updatePlayerTeamsCount(player.id, event.target.value, tourneyTeamsCount, player.teamsCount)}}
                        />
                    </div>

                    <TeamsListContainer requiredTeams={player.requiredTeams} />

                </CardContent>
            </Card>
        );
    }

}