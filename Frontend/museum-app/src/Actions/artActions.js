import axios from "axios";

export async function getArt(token, pageNumber) {
  var response = "";
  try {
    response = await axios.get(`https://museum-api-backend.herokuapp.com/art?page=${pageNumber}`, {
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
export async function deleteImage(ID, token) {
  var response = "";
  try {
    response = await axios.delete("https://museum-api-backend.herokuapp.com/art", {
      headers: {
        "login-token": token,
      },
      data: {
        id: ID,
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
