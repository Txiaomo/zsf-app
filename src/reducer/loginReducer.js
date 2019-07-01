const defaultState = {
  data: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "":
      return state.merge({
        data: []
      });
    default:
      return state;
  }
};
