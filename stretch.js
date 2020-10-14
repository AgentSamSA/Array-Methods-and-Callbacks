import { fifaData } from './fifa.js';

//README Stretch Task 1
function getCountryAppearances(teamInitials) {
    const countryAppearances = fifaData.reduce(function(appearances, game) {
        if (game["Home Team Initials"] === teamInitials || game["Away Team Initials"] === teamInitials) {
            appearances += 1;
        }
        return appearances;
    }, 0);
    return countryAppearances;
}
console.log(getCountryAppearances("BRA"));

//README Stretch Task 3
function getGoalsScored(teamInitials) {
    const totalGoals = fifaData.reduce(function(goals, game) {
        if (game["Home Team Initials"] === teamInitials) {
            goals += game["Home Team Goals"];
        } else if (game["Away Team Initials"] === teamInitials) {
            goals += game["Away Team Goals"];
        }
        return goals;
    }, 0);
    return totalGoals;
}
console.log(getGoalsScored("GER"));