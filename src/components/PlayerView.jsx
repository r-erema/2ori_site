import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TeamsListContainer from "./TeamsListContainer.jsx";
import IconButton from '@material-ui/core/IconButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Input from '@material-ui/core/Input';

export default class PlayerView extends React.Component {

    render() {
        const {player, switchPlayerNameEditMode, updatePlayerName, updatePlayerTeamsCount} = this.props;
        return (
            <Card>
                <CardContent>

                    {(() => {
                        if (player.editNameMode) {
                            return <Input value={player.name}
                                          autoFocus={true}
                                          onChange={(event) => {updatePlayerName(player.id, event.target.value)}}
                                          onBlur={() => switchPlayerNameEditMode(player.id)}
                                   />
                        } else {
                            return  <Typography variant="h5" component="h2" >
                                        {player.name}
                                        <IconButton key="close" aria-label="close" color="inherit" onClick={() => switchPlayerNameEditMode(player.id)} >
                                            <EditOutlinedIcon />
                                        </IconButton>
                                    </Typography>
                        }
                    })()}

                    <Input
                        label="Teams count:"
                        type="number"
                        inputProps={{ min: 0  }}
                        value={player.teamsCount}
                        onChange={(event) => {updatePlayerTeamsCount(player.id, event.target.value)}}
                    />

                    <TeamsListContainer requiredTeams={player.requiredTeams} />

                </CardContent>
            </Card>
        );
    }

}