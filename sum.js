export const functionSum = (a, b) => {
  if (!a || !b) {
    return new Error('Give me numbers');
  }
  return a + b;
};
