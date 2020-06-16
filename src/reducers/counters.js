export default (state = 0, action) => {
  console.log("reducer", state);
  switch (action.type) {
    case "INCREMENT":
      return state + action.score;
    case "DECREMENT":
      return state - action.score;
    default:
      return state;
  }
};
