const calculateEaster = require("./calculateEaster");

const main = document.getElementById("main");

const date = new Date();
if (calculateEaster(date.getFullYear()).toDateString() === date.toDateString()) {
    main.innerText = "Yes.";
} else {
    main.innerText = "No.";
}