import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://get-bcc-fcef56ad7bd0.herokuapp.com/",
});

export { axiosInstance };
