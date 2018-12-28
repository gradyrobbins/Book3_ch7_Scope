console.log("hello world main.js");
console.log("C is for Cookie");

const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
// let y = 1

// for (let y = 0; y < cookies.length; y++) {
//     const currentCookie = cookies[y]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }

// let display = document.getElementById("display-container");


for (let y = 0; y < cookies.length; y++) {
    let display = document.getElementById("display-container");
    const currentCookie = cookies[y]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
    display.innerHTML += `Mmmmmmm... that's a good ${currentCookie} cookie`
    display.innerHTML += '<br></br>'

}

// conjunction_function
console.log("");
console.log("Mod Squad");

const ModSquad = {
    "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
    "series": {
        "start": "1968",
        "end": "1973"
    }
}

let HTMLRepresentation = `<h1>The Mod Squad</h1>`

ModSquad.members.forEach(member => {
     HTMLRepresentation += `<div>${member}</div>`
})

document.getElementById("display-container-2").innerHTML = HTMLRepresentation

console.log("");
console.log("conjunction function")

let conjunction = function (firstWord, secondWord) {
    let conjoinedWord = `${firstWord} ${secondWord}`
    return conjoinedWord;
}

let bloop = conjunction("Master", "Card")
console.log(conjunction("Master", "Card"))
document.getElementById("display-container-3").innerHTML += bloop

console.log("");
console.log("simon says")
const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

let x = 0;

for (let k = 0; k < locations.length; k++) {
    let currentLocation = locations[k];
    // console.log("currentLocation " + currentLocation)
    // console.log("currentLocation[0] " + currentLocation[0])
    if (currentLocation[0] < 2) {(console.log(`${currentLocation} good location`))}
    else if (currentLocation[0] = 2) {

        // let invalidLocation = true
        console.log(`location ${currentLocation} is invalid `);
        x++;
    }
    // if (invalidLocation) {
    // }

    /*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
    */
   console.log(`There were ${x} invalid locations`)
}

document.getElementById("display-container-4").innerHTML += "There are two separate scoping issues in this code. Remember, for and if are their own block scopes and if something is declared with let or const then that variable only exists in that scope."