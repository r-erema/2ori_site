import {
    ADD_PLAYER_ACTION,
    CHANGE_TOURNEY_TEAMS_COUNT_ACTION,
    UPDATE_PLAYER_NAME,
    UPDATE_PLAYER_TEAMS_COUNT,
    ADD_REQUIRED_TEAM_CONTROL,
    CHANGE_REQUIRED_TEAM,
    GENERATE_TOURNEY, SHOW_TOURNEY_MODAL
} from "./actions";
import uniqid from "uniqid";
import { initialPlayersState, distributeTeamsCountEvenly } from "./utils.js";

export const tourneyTeamsCount = (tourneyTeamsCount = 64, action = {}) => {
    switch (action.hasOwnProperty('type') && action.type) {
        case CHANGE_TOURNEY_TEAMS_COUNT_ACTION: {
            return parseInt(action.count);
        }
        default: {
            return tourneyTeamsCount;
        }
    }
};

export const players = (players = [], action = {}) => {
    switch (action.type) {

        case ADD_PLAYER_ACTION: {
            return distributeTeamsCountEvenly([...players, {
                id: uniqid(),
                name: 'Player ' + (players.length + 1),
                teamsCount: 0,
                requiredTeamIds: []
            }], action.tourneyTeamsCount);
        }

        case UPDATE_PLAYER_NAME: {
            players = [...players];
            const i = players.findIndex(player => player.id === action.playerId);
            players[i].name = action.name;
            return players;
        }

        case UPDATE_PLAYER_TEAMS_COUNT: {

            if (action.teamsCount < 1) {
                return players;
            }

            const clonedPlayers = [...players];
            const i = clonedPlayers.findIndex(player => player.id === action.playerId);
            clonedPlayers[i].teamsCount = parseInt(action.teamsCount);

            return validatePlayers(clonedPlayers, action.tourneyTeamsCount) ? clonedPlayers : players;
        }

        case CHANGE_TOURNEY_TEAMS_COUNT_ACTION: {
            return initialPlayersState(action.count);
        }

        case ADD_REQUIRED_TEAM_CONTROL: {
            const clonedPlayers = [...players];
            const i = clonedPlayers.findIndex(player => player.id === action.playerId);
            clonedPlayers[i].requiredTeamIds.push({
                teamId: ''
            });
            return clonedPlayers;
        }

        case CHANGE_REQUIRED_TEAM: {
            const clonedPlayers = [...players];
            const i = clonedPlayers.findIndex(player=> player.id === action.playerId);
            const teamIndexToChange = clonedPlayers[i].requiredTeamIds.findIndex(team => team.teamId === action.teamIdToChange);
            clonedPlayers[i].requiredTeamIds[teamIndexToChange]['teamId'] = action.newTeamId;
            return clonedPlayers;
        }

        default: {
            return players;
        }
    }

};

export const tourney = (tourney = null, action) => {
    switch (action.hasOwnProperty('type') && action.type) {
        case GENERATE_TOURNEY: {
            return Object.assign({}, action.tourney);
        }
        case SHOW_TOURNEY_MODAL: {
            return Object.assign({}, action.tourney);
        }
        default: {
            return tourney;
        }
    }
};

const validatePlayers = (players, tourneyTeamsCount) => {
    let currentTotalCount = 0;
    players.map(player => currentTotalCount += player.teamsCount);
    return currentTotalCount <= tourneyTeamsCount;
};