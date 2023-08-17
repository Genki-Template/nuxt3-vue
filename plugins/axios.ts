// https://github.com/axios/axios
import axios from "axios";
import camelcaseKeys from "camelcase-keys";

export default defineNuxtPlugin(() => {
  const api = axios.create({
    baseURL: "	https://dummy.restapiexample.com/api/v1",
    headers: {},
  });
  api.interceptors.response.use((response) => {
    if (!response.data || typeof response.data !== "object") {
      return response;
    }
    response.data = camelcaseKeys(response.data, { deep: true });
    return response;
  });

  return {
    provide: {
      api,
    },
  };
});
