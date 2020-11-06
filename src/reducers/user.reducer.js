import userActionTypes from "../action-types/user.type";

const initState = {
  firstName: null,
  lastName: null,
  isLoading: false,
  error: null,
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN_SET_LOADING: {
      const { isLoading } = action.payload;
      return {
        ...state,
        error: null,
        isLoading,
      }
    }
    case userActionTypes.SIGN_IN_SET_ERROR: {
      const { error } = action.payload;
      return {
        ...state,
        error,
        isLoading: false,
      }
    }
    case userActionTypes.SIGN_IN_SET_USER: {
      const { firstName, lastName, isLoading } = action.payload;
      return {
        ...state,
        firstName,
        lastName,
        isLoading,
      }
    }
    default: {
      return { ...state };
    }
  }
};

export default userReducer;