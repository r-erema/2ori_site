import React from 'react';

export default class TeamsListView extends React.Component {

    render() {
        let {requiredTeams} = this.props;
        return <ul>{requiredTeams.map(team => <li key={team.name}>{team.name}</li>)}</ul>;
    }

}