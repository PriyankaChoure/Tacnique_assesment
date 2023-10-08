import axios from "axios";
const URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUserData = async () => {
  try {
    const responseData = await axios.get(URL);
    console.log("in api - ", responseData);
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

export const saveUserData = async (userData) => {
  try {
    const responseData = await axios.post(URL, userData);
    console.log("in api - ", responseData);
    return responseData;
  } catch (err) {
    console.log(err);
  }
};
