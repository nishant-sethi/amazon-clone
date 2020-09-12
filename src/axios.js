import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-af859.cloudfunctions.net/api"
  // "http://localhost:5001/clone-af859/us-central1/api", // cloud functions url
});
export default instance;

