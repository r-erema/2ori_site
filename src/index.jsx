import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { combineReducers } from 'redux';
import * as reducers from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TourneyTeamsNumberContainer from './components/TourneyTeamsNumberContainer.jsx';
import PlayersListContainer from './components/PlayersListContainer.jsx';
import { withStyles } from '@material-ui/core/styles';
import uniqid from 'uniqid';
import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;

const generateInitialState = function () {
    const tourneyTeamsCount = 8;
    const players = [
        {
            id: uniqid(),
            name: '',
            teamsCount: 0,
            requiredTeams: [],
            editNameMode: false
        },
        {
            id: uniqid(),
            name: '',
            teamsCount: 0,
            requiredTeams: [],
            editNameMode: false
        },
    ];

    let teamsPerPlayer = Math.round(tourneyTeamsCount / players.length);
    let remainingTeams = tourneyTeamsCount;
    for (let i = 0; i < players.length; i++) {
        teamsPerPlayer = teamsPerPlayer < remainingTeams ? teamsPerPlayer : remainingTeams;
        players[i].name = 'Player ' + (i + 1);
        players[i].teamsCount = teamsPerPlayer;
        remainingTeams -= teamsPerPlayer
    }
    if (remainingTeams > 0) {
        players[0].teamsCount += remainingTeams;
    }

    return {
        tourneyTeamsCount: tourneyTeamsCount,
        remainingTeamsCount: 0,
        players: players
    }
};

const mainReducer = combineReducers(reducers);

const store = createStore(mainReducer, generateInitialState());

class App extends React.Component {

    componentDidMount() {
        axios.get('/init/').then(response => {
            console.log(response.data);
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container spacing={16} justify="center" >
                <Grid item xs={8} sm={8}  >
                    <Paper className={classes.root} >
                        <TourneyTeamsNumberContainer />
                        <PlayersListContainer />
                    </Paper>
                </Grid>
            </Grid>
        );
    };
}

const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 2,
    }
});
App = withStyles(styles)(App);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('mount-point')
);