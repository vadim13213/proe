import axios from "axios";

const baseURL = "http://127.0.0.1:5240";
export default axios.create({ baseURL });
