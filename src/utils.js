import uniqid from "uniqid";

export const generateInitialState = function () {
    const tourneyTeamsCount = 8;

    return {
        tourneyTeamsCount: tourneyTeamsCount,
        players: initialPlayersState(tourneyTeamsCount)
    }
};

export const initialPlayersState = tourneyTeamsCount =>{
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
    players.map(( player, i) => player.name = 'Player ' + (i + 1));
    return distributeTeamsCountEvenly(players, tourneyTeamsCount);
};

export const distributeTeamsCountEvenly = (players, tourneyTeamsCount) => {
    let teamsPerPlayer = Math.round(tourneyTeamsCount / players.length);
    let remainingTeams = tourneyTeamsCount;
    for (let i = 0; i < players.length; i++) {
        teamsPerPlayer = teamsPerPlayer < remainingTeams ? teamsPerPlayer : remainingTeams;
        players[i].teamsCount = teamsPerPlayer;
        remainingTeams -= teamsPerPlayer
    }
    if (remainingTeams > 0) {
        players[0].teamsCount += remainingTeams;
    }
    return players
};