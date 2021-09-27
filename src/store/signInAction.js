import axios from "axios";
export const signIn = (response) => ({
  type: "login-user",
  payload: response,
});

export const signInError = (response) => ({
  type: "signin-error",
  payload: response,
});

export const requestSignIn = (credential) => {
  return async (dispatch) => {
    const response = await axios.post("localhost:8080/signin", {
      data: {
        email: credential.email,
        password: credential.password,
      },
    });
    if (response.data.message === "Logged in Successfully")
      dispatch(signIn(response.data.userInfo));
    else dispatch(signInError(response.data.message));
  };
};
