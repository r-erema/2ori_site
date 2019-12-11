import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TourneyTeamsNumberContainer from './components/containers/TourneyTeamsNumberContainer.jsx';
import PlayersListContainer from './components/containers/PlayersListContainer.jsx';
import { withStyles } from '@material-ui/core/styles';
import { generateInitialState } from './utils.js';
import axios from 'axios';
import * as reducers from './reducers';
import {SHOW_TOURNEY, showTourneyAction} from "./actions";
import {connect} from "react-redux";

axios.defaults.baseURL = process.env.API_URL;

const mainReducer = combineReducers(reducers);

const store = createStore(mainReducer, generateInitialState());

class App extends React.Component {

    render() {
        const { classes, showTourney } = this.props;

        return (
            <Grid container spacing={16} justify="center" >
                <Grid item xs={8} sm={8}  >
                    <Paper className={classes.root} >
                        <TourneyTeamsNumberContainer />
                        <PlayersListContainer />
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => {axios.post('/tourney/create/', store.getState()).then(response => showTourney(response.data))
                        }} >
                            Generate tourney
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        );
    };
}

const mapStateToProps= (state) => {
    return {
        tourney: tourney(state.tourney, SHOW_TOURNEY)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showTourney: (tourney) => {
            dispatch(showTourneyAction(tourney))
        }
    };
};

connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

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