import axios from "axios";

export async function getArt(token) {
  var response = "";
  try {
  
   response = await axios.get("http://localhost:5000/art", {
    headers: {
        "login-token": token,
    },
    });
    if (response.status !== 200) {
      return response.status;
    } else {
      return response.data;
    }
  } catch (e) {
    return response.status;
  }
}
export default getArt;