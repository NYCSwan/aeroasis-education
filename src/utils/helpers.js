import { forEach } from "lodash";

export const calculateQuizScore = response => {
  // console.log(response);
  let profileAnswers = {}, // !2
    energyAnswers = {}; //1,2,4,5,6, 11
  // const answers = [];

  forEach(response, (value, key) => {
    if (
      key === "q0" ||
      key === "q3" ||
      key === "q4" ||
      key === "q5" ||
      key === "q10"
    ) {
      profileAnswers[key] = value;

      energyAnswers[key] = value;
    } else if (key === "q1") {
      energyAnswers[key] = value;
    } else {
      profileAnswers[key] = value;
    }
    // const answers = [profileAnswers, energyAnswers];
    // debugger;
    // return answers;
  });
  const score1 = calculateProfileScore(profileAnswers);
  const score2 = calculateEnergyScore(energyAnswers);
  debugger;
};

const calculateProfileScore = response => {
  let score = 0;
  const answerKey = {};
};

export const calculateEnergyScore = response => {
  let score = 0;
  const answerKey = {
    q0: {
      "Pastas and grains like rice": 2,
      "Candy and sweets": 3,
      Fruit: 1,
      Vegetables: 1,
      Meat: 3,
      "Dairy like milk and cheese": 2,
      "Salty foods like chips": 3
    },
    q1: {
      Yes: 1,
      No: 3
    },
    q3: {
      "One meal": 1,
      "Two meals": 2,
      "Three big meals": 3,
      "Three small meals": 2,
      "More than 3 big meals": 3,
      "More than 3 small meals": 4
    },
    q4: {
      "Canned items": 2,
      "Fresh items": 1,
      "Ready-made items": 3,
      condiments: 3
    },
    q5: {},
    q10: {}
  };

  forEach(response, (answer, question) => {
    if (
      (question === "q1" && answer.toLowerCase().includes("yes")) ||
      (question === "q1" && answer.toLowerCase().includes("yeah"))
    ) {
      // debugger;
      score += answerKey[question].Yes;
    } else if (
      (question === "q1" && answer.toLowerCase().includes("no")) ||
      (question === "q1" && answer.toLowerCase().includes("not"))
    ) {
      // debugger;
      score += answerKey[question].No;
    } else if (question === "q5") {
      console.log("answer", answer);
      // deal with radio grids
    } else if (question === "q10") {
      console.log("answer", answer);
    } else {
      debugger;
      score += answerKey[question][answer];
    }
  });

  debugger;
  return score;
};
