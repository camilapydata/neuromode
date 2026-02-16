#!/usr/bin/env node

const readline = require("readline");
const { calculateCognitiveFriction } = require("./lib/friction");
const { decomposeTask } = require("./lib/decomposer");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let steps = [];
let currentIndex = 0;

function displayStep() {
  console.log(`\n[${currentIndex + 1}/${steps.length}] ${steps[currentIndex]}`);
}

function askNext() {
  rl.question("\nOptions: next | prev | exit\n> ", (answer) => {
    const command = answer.trim().toLowerCase();

    if (command === "next") {
      if (currentIndex < steps.length - 1) {
        currentIndex++;
        displayStep();
      } else {
        console.log("\n✓ Task completed progressively.");
        rl.close();
        return;
      }
    } else if (command === "prev") {
      if (currentIndex > 0) {
        currentIndex--;
        displayStep();
      } else {
        console.log("Already at the first step.");
      }
    } else if (command === "exit") {
      console.log("\nExiting NeuroMode.");
      rl.close();
      return;
    } else {
      console.log("Invalid command.");
    }

    askNext();
  });
}

function start() {
  rl.question("Describe your task:\n> ", (task) => {
    if (!task.trim()) {
      console.log("Task cannot be empty.");
      start();
      return;
    }

    const frictionScore = calculateCognitiveFriction(task);

    console.log(`\nCognitive Friction Score: ${frictionScore}`);

    if (frictionScore > 15) {
      console.log("High cognitive load detected.");
      console.log("Progressive Decomposition Mode activated.\n");
    } else {
      console.log("Normal decomposition mode.\n");
    }

    steps = decomposeTask(task, frictionScore);
    currentIndex = 0;

    displayStep();
    askNext();
  });
}

start();
