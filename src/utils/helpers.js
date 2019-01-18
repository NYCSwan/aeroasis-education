import { forEach } from "lodash";

export const calculateQuizScore = response => {
  // console.log(response);
  let profileAnswers = {}, // !2 3
    energyAnswers = {}; //1,2,4,5,6, 11

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
    } else if (key === "q2") {
      // analyse text ...
    } else if (key === "email") {
      console.log("email");
    } else {
      profileAnswers[key] = value;
    }
  });
  const score1 = calculateProfileScore(profileAnswers);
  const score2 = calculateEnergyScore(energyAnswers);
  const total = [
    {
      type: "energy",
      score: score2
    },
    {
      type: "consumer",
      score: score1
    }
  ];

  // debugger;
  return total;
};

const calculateProfileScore = response => {
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
    q6: {
      "Eat it later": 3,
      "Throw it away": 1,
      "Give it away": 2,
      "Feed it to pets": 2,
      "Compost it": 2
    },
    q7: {
      Deli: 1,
      Supermarket: 2,
      "Farmers market": 3,
      Farm: 3,
      "I don't know": 1
    },
    q8: {
      farm: 3,
      store: 2,
      "the ground": 2,
      "don't know": 2
    },
    q9: {
      "1": 1,
      "40": 1,
      "100": 2,
      "400": 4,
      "1000": 3
    },
    q10: {},
    q11: {}
  };

  forEach(response, (answer, question) => {
    if (
      question === "q5" ||
      question === "q8" ||
      question === "q10" ||
      question === "q11"
    ) {
      console.log("answer", answer);
      // deal with radio grids
      // } else if () {
      //   console.log("answer", answer);
    } else {
      // debugger;
      score += answerKey[question][answer];
    }
  });
  return score;
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
      score += answerKey[question][answer];
    }
  });
  return score;
};

// validate email address
export const validateEmail = email => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const validateHumanity = async key => {
  return fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    body: JSON.stringify(key)
  })
    .then(res => {
      console.log("captcha", res);
    })
    .catch(err => {
      console.log("err", err);
    });
};
