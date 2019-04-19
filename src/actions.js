export const CHANGE_TOURNEY_TEAMS_COUNT_ACTION = 'CHANGE_TEAMS_COUNT_ACTION',
             ADD_PLAYER_ACTION = 'ADD_PLAYER_ACTION';

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