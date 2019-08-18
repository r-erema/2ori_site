export const CHANGE_TOURNEY_TEAMS_COUNT_ACTION = 'CHANGE_TEAMS_COUNT_ACTION',
             ADD_PLAYER_ACTION = 'ADD_PLAYER_ACTION',
             SWITCH_PLAYER_NAME_EDITABLE_MODE = 'SWITCH_PLAYER_NAME_EDITABLE_MODE',
             UPDATE_PLAYER_NAME = 'UPDATE_PLAYER_NAME',
             UPDATE_PLAYER_TEAMS_COUNT = 'UPDATE_PLAYER_TEAMS_COUNT';

export function changeTourneyTeamsCountAction(count) {
    return {
        type: CHANGE_TOURNEY_TEAMS_COUNT_ACTION,
        count: count
    }
}

export function addPlayerAction() {
    return {
        type: ADD_PLAYER_ACTION,
    }
}

export function makePlayerNameEditableAction(playerId) {
    return {
        type: SWITCH_PLAYER_NAME_EDITABLE_MODE,
        playerId: playerId
    }
}

export function updatePlayerNameAction(playerId, name) {
    return {
        type: UPDATE_PLAYER_NAME,
        name: name,
        playerId: playerId
    }
}
export function updatePlayerTeamsCountAction(playerId, teamsCount) {
    return {
        type: UPDATE_PLAYER_TEAMS_COUNT,
        teamsCount: teamsCount,
        playerId: playerId
    }
}