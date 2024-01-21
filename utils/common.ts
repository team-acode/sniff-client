export const convertNum = (num: number) => {
  if (num) return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return num;
};
