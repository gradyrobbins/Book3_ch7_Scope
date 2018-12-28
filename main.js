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
console.log("conjunction function");

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
