// Code your solution here
const drivers =['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (arr, str) {
    let drivers = arr.filter((item) => str.toUpperCase() === item.toUpperCase());
    return drivers ? drivers : [];
}

function fuzzyMatch (arr, letter) {
    return arr.filter ((item) => item.startsWith(letter));

}
function matchName (arr, name) {
    return arr.filter ((item) => item.name === name);

}