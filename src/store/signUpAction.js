import axios from "axios";

export const signUp = (response) => ({
  type: "sign-up-user",
  payload: response,
});

export const requestSignUp = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("localhost:8080/signup", {
        address: {
          geolocation: {
            lat: "0",
            long: "0",
          },
          city: user.city,
          street: "0",
          number: user.streetNumber,
          zipcode: user.zipcode,
        },
        firstname: user.firstName,
        lastname: user.lastName,
        email: user.email,
        username: user.username,
        phone: user.phone,
        password: user.password,
      });
      dispatch(signUp(response.data));
    } catch (err) {}
  };
};
