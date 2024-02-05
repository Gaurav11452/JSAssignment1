// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors

const BtnNoun1 = document.getElementById("noun1");
const BtnVerb = document.getElementById("verb");
const BtnAdjective = document.getElementById("adjective");
const BtnNoun2 = document.getElementById("noun2");
const BtnSetting = document.getElementById("setting");

// Constants for p tag to display query selectors

const ParagraphNoun1 = document.getElementById("choosenNoun1");
const ParagraphVerb = document.getElementById("choosenVerb");
const ParagraphAdjective = document.getElementById("choosenAdjective");
const ParagraphNoun2 = document.getElementById("choosenNoun2");
const ParagraphSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags

const playbackBtn = document.getElementById("playback");
const randomBtn = document.getElementById("random");

// Variables for pre-defined arrays

// Noun1 Array List
const nouns1 = [
    "The Turkey",
    "Mom",
    "Dad",
    "The Dog",
    "My Teacher",
    "The Elephant",
    "The Cat",
  ];

  // Verbs Array List
const verbs = ["sat on", "ate", "danced with", "saw", "dosen't like", "kissed"];

// Adjective Array List
const adjectives = [
  "a funny",
  "a scary",
  "a goofy",
  "a slimy",
  "a barking",
  "a fat",
];
// Noun2 Array List
const nouns2 = ["goat", "monkey", "fish", "cowfrog", "bug", "worm"];
// Settings Array List
const settings = [
  "on the moon",
  "on the chair",
  "in my spaghetti",
  "in my soup",
  "on the grass",
  "in my shoes",
];


// Variables for count to grab array elements

let count = 0;

// variables for the story ,studentid and student name
const story = document.getElementById("story");
const studentId = 200528748;
const studentName = "Gaurav Gaurav";

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it

    ParagraphNoun1.textContent = nouns1[count % nouns1.length];
    count++;

}

function verb_on_click() {
    ParagraphVerb.textContent = verbs[count % verbs.length];
    count++;

}

function adjective_on_click() {
    ParagraphAdjective.textContent = adjectives[count % adjectives.length];
    count++;
}

function noun2_on_click() {
    ParagraphNoun2.textContent = nouns2[count % nouns2.length];
    count++;
}

function setting_on_click() {
    ParagraphSetting.textContent = settings[count % settings.length];
    count++;
}

// concatenate the user story and display
function playback_on_click() {
  const userStory =`${ParagraphNoun1.textContent} ${ParagraphVerb.textContent} ${ParagraphAdjective.textContent} ${ParagraphNoun2.textContent} ${ParagraphSetting.textContent}`;
  story.textContent = userStory;
}

function random_on_click() {
     //Random function to get the random element from an array
    const randomNoun1 = getRandomElement(nouns1);
    const randomVerb = getRandomElement(verbs);
    const randomAdjective = getRandomElement(adjectives);
    const randomNoun2 = getRandomElement(nouns2);
    const randomSetting = getRandomElement(settings);

    // Now display the random elements
    ParagraphNoun1.textContent = randomNoun1;
    ParagraphVerb.textContent = randomVerb;
    ParagraphAdjective.textContent = randomAdjective;
    ParagraphNoun2.textContent = randomNoun2;
    ParagraphSetting.textContent = randomSetting;

    const randomStory = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomSetting}`;
    story.textContent = randomStory;
}

// This function will give a random element from an array
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}


/* Event Listeners
-------------------------------------------------- */
BtnNoun1.addEventListener("click", noun1_on_click);
BtnVerb.addEventListener("click", verb_on_click);
BtnAdjective.addEventListener("click", adjective_on_click);
BtnNoun2.addEventListener("click", noun2_on_click);
BtnSetting.addEventListener("click", setting_on_click);

playbackBtn.addEventListener("click", playback_on_click);
randomBtn.addEventListener("click", random_on_click);

const studentIdParagraph = document.getElementById("studentId");

// Function to display student ID when h1 is clicked
function displayStudentId() {
    studentIdParagraph.textContent = `Student ID: ${studentId} Name:${studentName}`;
}

// Adding the click event to h1
const titleElement = document.getElementById("storyH1");
titleElement.addEventListener("click", displayStudentId);
