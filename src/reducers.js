import {
    ADD_PLAYER_ACTION,
    CHANGE_TOURNEY_TEAMS_COUNT_ACTION,
    UPDATE_PLAYER_NAME,
    UPDATE_PLAYER_TEAMS_COUNT,
    ADD_REQUIRED_TEAM_CONTROL,
    ADD_REQUIRED_TEAM_TO_PLAYER
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
                requiredTeams: []
            }], action.tourneyTeamsCount);
        }

        case UPDATE_PLAYER_NAME: {
            players = [...players];
            const i = players.findIndex((player) => {return player.id === action.playerId});
            players[i].name = action.name;
            return players;
        }

        case UPDATE_PLAYER_TEAMS_COUNT: {

            if (action.teamsCount < 1) {
                return players;
            }

            const clonedPlayers = [...players];
            const i = clonedPlayers.findIndex((player) => {return player.id === action.playerId});
            clonedPlayers[i].teamsCount = parseInt(action.teamsCount);

            return validatePlayers(clonedPlayers, action.tourneyTeamsCount) ? clonedPlayers : players;
        }

        case CHANGE_TOURNEY_TEAMS_COUNT_ACTION: {
            return initialPlayersState(action.count);
        }

        case ADD_REQUIRED_TEAM_CONTROL: {
            const clonedPlayers = [...players];
            const i = clonedPlayers.findIndex((player) => {return player.id === action.playerId});
            clonedPlayers[i].requiredTeams.push({
                teamId: ''
            });
            return clonedPlayers;
        }

        default: {
            return players;
        }

        case ADD_REQUIRED_TEAM_TO_PLAYER: {
            const clonedPlayers = [...players];
            const i = clonedPlayers.findIndex((player) => {return player.id === action.playerId});
            clonedPlayers[i].requiredTeams.push({
                teamId: action.teamId
            });
            return clonedPlayers;
        }

    }

};

const validatePlayers = (players, tourneyTeamsCount) => {
    let currentTotalCount = 0;
    players.map(player => currentTotalCount += player.teamsCount);
    return currentTotalCount <= tourneyTeamsCount;
};