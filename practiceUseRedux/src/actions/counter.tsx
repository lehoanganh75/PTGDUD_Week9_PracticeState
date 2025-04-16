export const increment = (number: number) => ({
  type: "INCREMENT",
  payload: number,
});

export const decrement = (number: number) => ({
  type: "DECREMENT",
  payload: number,
});
