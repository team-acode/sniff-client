export const convertNum = (num: number) => {
  if (num) return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return num;
};

export const maskingNickname = (value: string) => {
  if (value.length === 2) {
    return value.replace(/(?<=.{1})./gi, '*');
  }
  if (value.length > 2) {
    return value.replace(/(?<=.{2})./gi, '*');
  }
  return '*';
};
