import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class TeamsListView extends React.Component {

    render() {
        let {requiredTeams} = this.props;
        return requiredTeams
            ? (<List>
                {requiredTeams.map(team => <ListItem key={team.name}>
                    <ListItemText>{team.name}</ListItemText>
                </ListItem>)}
               </List>)
            : '';
    }

}