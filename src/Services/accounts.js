const axios = require("axios").default;

const signup = async (user) => {
  try {
    //Here url frm .env file is not getted due to unknown reason, I will change it later
    const response = await axios.post("http://127.0.0.1:5000/auth/signup", {
      name: user.name,
      email: user.email,
      password: user.password,
    });
    return response.data;
  } catch (error) {
    return error.message;
  }
};
const login = async (user) => {
  try {
    const response = await axios.post("http://127.0.0.1:5000/auth/login", {
      email: user.email,
      password: user.password,
    });
    return response.data;
  } catch (error) {
    return error.message;
  }
};
module.exports = { signup, login };
