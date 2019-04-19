import React from 'react';

export default class TeamsListView extends React.Component {

    render() {
        let {team} = this.props;
        return <div>{team.name}</div>;
    }

}