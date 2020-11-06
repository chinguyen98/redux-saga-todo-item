const initState = {
  firstName: null,
  lastName: null,
  isLoading: false,
  error: null,
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
};

export default userReducer;