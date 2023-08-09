export const functionSum = (a, b) => {
  if (isNaN(Number(a)) || isNaN(Number(b))) {
    throw new Error('Give me numbers');
  }
  return Number(a) + Number(b);
};
