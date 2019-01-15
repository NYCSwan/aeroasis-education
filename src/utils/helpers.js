import { forEach } from "lodash";

export const calculateQuizScore = response => {
  // console.log(response);
  const profileAnswers = {}; // !2
  const energyAnswers = {}; //1,2,4,5,6, 11
  forEach(response, (value, key) => {
    debugger;
  });
};

const calculateProfileScore = response => {
  return response;
};

const calculateEnergyScore = response => {
  return response;
};
