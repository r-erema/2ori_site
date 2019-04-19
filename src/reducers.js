import {ADD_PLAYER_ACTION, CHANGE_TOURNEY_TEAMS_COUNT_ACTION} from "./actions";

export const tourneyTeamsCount = (tourneyTeamsCount = 64, action) => {
    switch (action.type) {
        case CHANGE_TOURNEY_TEAMS_COUNT_ACTION: {
            return action.count;
        }
        default: {
            return tourneyTeamsCount;
        }
    }
};

export const players = (state = [], action) => {
    switch (action.type) {
        case ADD_PLAYER_ACTION: {
            return [...state, {
                id: 3,
                name: 'Player3',
                teamsCount: 0,
            }]
        }
        default: {
            return state;
        }
    }
};