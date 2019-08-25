import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import teams from '../../teams'

import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Select from 'react-select';
import uniqid from 'uniqid';
import NoSsr from '@material-ui/core/NoSsr';

export default class RequiredTeamsListView extends React.Component {

    render() {
        let {player, addRequiredTeam} = this.props;

        return <div>
            <Button variant="contained" color="primary" onClick={() => addRequiredTeam(player.id)} >
                <AddIcon />
                Add required team
            </Button>

            {(() => {
                return player.requiredTeams.length > 0
                    ? (<NoSsr><List>
                        {player.requiredTeams.map(team => <ListItem key={uniqid()}>
                            <Select
                                inputId="react-select-single"
                                TextFieldProps={{
                                    label: 'Required team',
                                    InputLabelProps: {
                                        htmlFor: 'react-select-single',
                                        shrink: true,
                                    },
                                }}
                                placeholder="Search a country (start with a)"
                                options={teams}
                                //components={components}
                                value={1}
                                //onChange={handleChangeSingle}
                            />
                        </ListItem>)}
                    </List></NoSsr>)
                    : ''
            })()}
        </div>;

        /*return player.requiredTeams
            ? (<List>
                {player.requiredTeams.map(team => <ListItem key={team.name}>
                    <ListItemText>{team.name}</ListItemText>
                </ListItem>)}
               </List>)
            : '';*/
    }

}