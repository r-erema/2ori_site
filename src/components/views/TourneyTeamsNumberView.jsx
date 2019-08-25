import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default class TourneyTeamsNumberView extends React.Component {

    render() {
        let {tourneyTeamsCount, changeTourneyTeamsCount} = this.props;
        return (
            <FormControl >
                <FormLabel >Teams count</FormLabel>
                <RadioGroup row value={tourneyTeamsCount.toString()} onChange={changeTourneyTeamsCount} >
                    <FormControlLabel value="4" control={<Radio color="primary" />} label="4" />
                    <FormControlLabel value="8" control={<Radio color="primary" />} label="8" />
                    <FormControlLabel value="16" control={<Radio color="primary" />} label="16" />
                    <FormControlLabel value="32" control={<Radio color="primary" />} label="32" />
                    <FormControlLabel value="64" control={<Radio color="primary" />} label="64" />
                    <FormControlLabel value="128" control={<Radio color="primary" />} label="128" />
                </RadioGroup>
            </FormControl>
        );
    }

}