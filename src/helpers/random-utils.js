import { COUNT_ANSWERS } from '../constants/common';

export const getRandomAnswerIndex = () => {
  const res = Math.round(Math.random() * (COUNT_ANSWERS - 1));

  return res;
};

export const newFunc = () => {};
