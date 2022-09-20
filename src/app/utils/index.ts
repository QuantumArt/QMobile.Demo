export const findAfter = (arr: Array<number>, value: number): number =>
  arr.filter(elem => elem >= value)[0];

export const findBefore = (
  arr: Array<number>,
  value: number,
): number | undefined => arr.filter(elem => elem <= value).pop();
