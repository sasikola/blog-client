import Axios from "axios";

export default Axios.create({
  // baseURL: "blog-server-pbez.onrender.com",
  baseURL: "http://localhost:8000/",
});
