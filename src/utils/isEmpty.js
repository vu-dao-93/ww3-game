export const isEmpty = (object) => {
  return Object.getOwnPropertyNames(object).length === 0;
};

export default isEmpty;