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

const initialState = {
    tourneyTeamsCount: 16,
    players: [
        {
            id: 1,
            name: 'Player 1',
            teamsCount: 32,
            requiredTeams: [
                {name: 'Liverpool FC'}
            ]
        },
        {
            id: 2,
            name: 'Player 2',
            teamsCount: 32,
            requiredTeams: [
                {name: 'Real Madrid'},
                {name: 'Chelsea FC'}
            ]
        }
    ]
};

const mainReducer = combineReducers(reducers);

const store = createStore(mainReducer, initialState);

class App extends React.Component {
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