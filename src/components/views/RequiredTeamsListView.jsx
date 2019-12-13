import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
//todo: remove 'react-select', in package.json as well
import uniqid from 'uniqid';
import axios from 'axios';
import ReactSelectMaterialUi from "react-select-material-ui";


export default class RequiredTeamsListView extends React.Component {

    componentDidMount() {
        axios.get('/teams/')
            .then(res => {
                const data = res.data; // get the data array instead of object
                this.setState({ Teams: data.Teams });
            })
            .catch(err => { // log request error and prevent access to undefined state
                console.error(err);
            })
    }

    render() {

        let {player, addRequiredTeamControl, changeRequiredTeamToPlayer} = this.props;

        return <div>
            <Button variant="contained" color="primary" onClick={() => addRequiredTeamControl(player.id)} >
                <AddIcon />
                Add required team
            </Button>

            {(() => {
                return player.requiredTeamIds.length > 0
                    ? player.requiredTeamIds.map((selectedTeamId, i) => <ListItem key={uniqid()}>
                        {/*todo: style select*/}
                        <ReactSelectMaterialUi
                            style={{zIndex: 500 - i}}
                            fullWidth={true}
                            value={selectedTeamId}
                            options={this.state.Teams.map(team => {return {
                                value: team.Id,
                                label: team.Name
                                    + ' | ' + team.League
                                    + ' | rating: ' + team.Rating}
                            })}
                            onChange={(teamId) => changeRequiredTeamToPlayer(player.id, teamId, selectedTeamId)}
                        />
                    </ListItem>)
                    : ''
            })()}
        </div>;
    }

}