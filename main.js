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


