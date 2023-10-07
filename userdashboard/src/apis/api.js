import axios from "axios";
const URL = "https://jsonplaceholder.typicode.com/";

export const fetchUserData = async () => {
  try {
    const responseData = await axios.get(URL + "users");
    console.log("in api - ", responseData);
    return responseData;
  } catch (err) {
    console.log(err);
  }
};
