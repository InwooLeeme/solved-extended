const currentTheme = "currentTheme";

//Color paconstte from https://github.com/williambelle/github-contribution-color-graph/blob/master/src/js/contentscript.js
const halloween = ["#fdf156", "#ffc722", "#ff9711", "#04001b"];

// Themes from Material design
const amber = ["#ffecb3", "#ffd54f", "#ffb300", "#ff6f00"];
const blue = ["#bbdefb", "#64b5f6", "#1e88e5", "#0d47a1"];
const bluegrey = ["#cfd8dc", "#90a4ae", "#546e7a", "#263238"];
const brown = ["#d7ccc8", "#a1887f", "#6d4c41", "#3e2723"];
const cyan = ["#b2ebf2", "#4dd0e1", "#00acc1", "#006064"];
const deeporange = ["#ffccbc", "#ff8a65", "#f4511e", "#bf360c"];
const deeppurple = ["#d1c4e9", "#9575cd", "#5e35b1", "#311b92"];
const green = ["#c8e6c9", "#81c784", "#43a047", "#1b5e20"];
const grey = ["#e0e0e0", "#9e9e9e", "#616161", "#212121"];
const indigo = ["#c5cae9", "#7986cb", "#3949ab", "#1a237e"];
const lightblue = ["#b3e5fc", "#4fc3f7", "#039be5", "#01579b"];
const lightgreen = ["#dcedc8", "#aed581", "#7cb342", "#33691e"];
const lime = ["#f0f4c3", "#dce775", "#c0ca33", "#827717"];
const orange = ["#ffe0b2", "#ffb74d", "#fb8c00", "#e65100"];
const pink = ["#f8bbd0", "#f06292", "#e91e63", "#880e4f"];
const purple = ["#e1bee7", "#ba68c8", "#8e24aa", "#4a148c"];
const red = ["#ffcdd2", "#e57373", "#e53935", "#b71c1c"];
const teal = ["#b2dfdb", "#4db6ac", "#00897b", "#004d40"];
const yellowMd = ["#fff9c4", "#fff176", "#ffd835", "#f57f17"];

// Theme from Me
const unicorn = ["#6dc5fb", "#f6f68c", "#8affa4", "#f283d1"];
const summer = ["#eae374", "#f9d62e", "#fc913a", "#ff4e50"];
const sunset = ["#fed800", "#ff6f01", "#fd2f24", "#811d5e"];

// Theme from MoonAntonio
const moon = ["#6bcdff", "#00a1f3", "#48009a", "#4f2266"];
const psychedelic = ["#faafe1", "#fb6dcc", "#fa3fbc", "#ff00ab"];
const yellow = ["#d7d7a2", "#d4d462", "#e0e03f", "#ffff00"];

const currentColor = [
    window.getComputedStyle(document.querySelector("svg > rect:nth-child(385)")).fill,
    window.getComputedStyle(document.querySelector("svg > rect:nth-child(387)")).fill,
    window.getComputedStyle(document.querySelector("svg > rect:nth-child(389)")).fill,
    window.getComputedStyle(document.querySelector("svg > rect:nth-child(391)")).fill,
];

const colors = {
    currentColor:currentColor,
    halloween: halloween,   
    amber: amber,
    blue: blue,
    bluegrey: bluegrey,
    brown: brown,
    cyan: cyan,
    deeporange: deeporange,
    deeppurple: deeppurple,
    green: green,
    grey: grey,
    indigo: indigo,
    lightblue: lightblue,
    lightgreen: lightgreen,
    lime: lime,
    orange: orange,
    pink: pink,
    purple: purple,
    red: red,
    teal: teal,
    yellowMd: yellowMd, 
    summer: summer,
    unicorn: unicorn,
    sunset: sunset, 
    moon: moon,
    psychedelic: psychedelic,
    yellow: yellow,
};

function getCurrentColor(){
    return localStorage.getItem(currentTheme);
}

function fillColor(theme){
    let i = 0;
    for(const color of colors.currentColor){
        const rects = document.querySelectorAll(`[fill="${color}"]`);
        rects.forEach(e => e.setAttribute('fill',theme[i]));
        i++;
    }
}

function changeColor(){
    const selector = document.querySelector("#colorSelector");
    localStorage.setItem(currentTheme, selector.value);
}

function setSelector(){
    const headerBar = document.querySelector("#__next > div > div > div > nav > ul");
    const li = document.createElement('li');
    const selector = document.createElement('select');
    selector.id = "colorSelector";
    headerBar.appendChild(li);
    li.appendChild(selector);
    const colorArray = Object.keys(colors);
    for(let i = 0; i < colorArray.length; i++){
        const option = document.createElement('option');
        option.value = colorArray[i];
        option.text = colorArray[i];
        option.className = "colorLists";
        selector.appendChild(option);
    }
    selector.addEventListener("input",changeColor);
}

function init(){
    setSelector();
    const curColor = getCurrentColor();
    fillColor(colors[curColor]);
}

window.onload = init;