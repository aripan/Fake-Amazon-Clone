import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL

  // Local
  // baseURL: "http://localhost:5001/react--clone-c8de9/us-central1/api",

  // Cloud FireStore
  baseURL: "https://us-central1-react--clone-c8de9.cloudfunctions.net/api",
});

export default instance;
