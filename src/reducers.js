import {
    ADD_PLAYER_ACTION,
    CHANGE_TOURNEY_TEAMS_COUNT_ACTION,
    SWITCH_PLAYER_NAME_EDITABLE_MODE,
    UPDATE_PLAYER_NAME,
    UPDATE_PLAYER_TEAMS_COUNT
} from "./actions";
import uniqid from "uniqid";

export const tourneyTeamsCount = (tourneyTeamsCount = 64, action = {}) => {
    switch (action.hasOwnProperty('type') && action.type) {
        case CHANGE_TOURNEY_TEAMS_COUNT_ACTION: {
            return action.count;
        }
        default: {
            return tourneyTeamsCount;
        }
    }
};

export const players = (players = [], action = {}) => {
    switch (action.type) {
        case ADD_PLAYER_ACTION: {
            return [...players, {
                id: uniqid(),
                name: 'Player ' + (players.length + 1),
                teamsCount: 1,
            }]
        }

        case SWITCH_PLAYER_NAME_EDITABLE_MODE: {
            players = [...players];
            const i = players.findIndex((player) => {return player.id === action.playerId});
            players[i].editNameMode = !players[i].editNameMode;
            return players;
        }

        case UPDATE_PLAYER_NAME: {
            players = [...players];
            const i = players.findIndex((player) => {return player.id === action.playerId});
            players[i].name = action.name;
            return players;
        }

        case UPDATE_PLAYER_TEAMS_COUNT: {
            players = [...players];
            const i = players.findIndex((player) => {return player.id === action.playerId});
            players[i].teamsCount = action.teamsCount;
            return players;
        }

        default: {
            return players;
        }
    }
};

export const requiredTeams = (teams = []) => {
    return teams;
};