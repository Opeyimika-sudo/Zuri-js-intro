// Write a javascript code that prints out your name, height, and country on the screen
let myName = "Opeyimika Aremu";
let myHeight = 172;
let myCountry = "Nigeria";

let body = document.querySelector('body');
let header = document.createElement('div');
let nameTag = document.createElement('h1');
let heightTag = document.createElement('h2');
let countryTag = document.createElement('h2');
let para = document.createElement('h2');
nameTag.textContent = `My name: ${myName}`;
heightTag.textContent = `My height: ${myHeight}cm`;
countryTag.textContent = `My country: ${myCountry}`;

header.append(nameTag, heightTag, countryTag);
body.append(header);
body.style.cssText = "height: 100vh; color: green; background-color: pink; display: flex; flex-direction: column; align-items: center; justify-content: center;";