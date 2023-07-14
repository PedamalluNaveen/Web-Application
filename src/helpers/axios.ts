import axios from "axios";

const instance = axios.create({
  baseURL: process.env.COSMOS_URL,
  params: {
    code: process.env.COSMOS_CODE,
  },
});

instance.defaults.headers.common["idtoken"] = process.env.USER_ID_TOKEN;

export default instance;
