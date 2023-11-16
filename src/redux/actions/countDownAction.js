export const decrement = () => {
  return {
    type: "countDown/decrement",
  };
};

export const update = (payload) => {
  return {
    type: "countDown/update",
    payload,
  };
};
