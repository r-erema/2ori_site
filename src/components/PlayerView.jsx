import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TeamsListContainer from "./TeamsListContainer.jsx";

export default class PlayersListView extends React.Component {

    render() {
        const {player} = this.props;
        return (
            <Card >
                <CardContent>
                    <Typography variant="h5" component="h2" >{player.name}</Typography>
                    <Typography color="textSecondary">Teams count: {player.teamsCount}</Typography>

                    <TeamsListContainer requiredTeams={player.requiredTeams} />

                </CardContent>
            </Card>
        );
    }

}