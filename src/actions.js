export const CHANGE_TOURNEY_TEAMS_COUNT_ACTION = 'CHANGE_TEAMS_COUNT_ACTION',
             ADD_PLAYER_ACTION = 'ADD_PLAYER_ACTION',
             UPDATE_PLAYER_NAME = 'UPDATE_PLAYER_NAME',
             UPDATE_PLAYER_TEAMS_COUNT = 'UPDATE_PLAYER_TEAMS_COUNT',
             ADD_REQUIRED_TEAM_CONTROL = 'ADD_REQUIRED_TEAM_CONTROL',
             ADD_REQUIRED_TEAM_TO_PLAYER = 'ADD_REQUIRED_TEAM_TO_PLAYER';

export function changeTourneyTeamsCountAction(count) {
    return {
        type: CHANGE_TOURNEY_TEAMS_COUNT_ACTION,
        count: count
    }
}

export function addPlayerAction(tourneyTeamsCount) {
    return {
        type: ADD_PLAYER_ACTION,
        tourneyTeamsCount: tourneyTeamsCount
    }
}
export function updatePlayerNameAction(playerId, name) {
    return {
        type: UPDATE_PLAYER_NAME,
        name: name,
        playerId: playerId
    }
}
export function updatePlayerTeamsCountAction(playerId, teamsCount, tourneyTeamsCount, previousTeamsCount) {
    return {
        type: UPDATE_PLAYER_TEAMS_COUNT,
        teamsCount: teamsCount,
        playerId: playerId,
        tourneyTeamsCount: tourneyTeamsCount,
        previousTeamsCount: previousTeamsCount
    }
}

export function addRequiredTeamControl(playerId) {
    return {
        type: ADD_REQUIRED_TEAM_CONTROL,
        playerId: playerId
    }
}

export function addRequiredTeamToPlayer(playerId, teamId) {
    return {
        type: ADD_REQUIRED_TEAM_TO_PLAYER,
        playerId: playerId,
        teamId: teamId
    }
}
