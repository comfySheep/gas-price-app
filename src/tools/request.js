import axios from "axios";

const fetch = options => {
  const { method = "get", params, url, headers } = options;
  switch (method.toLowerCase()) {
    case "get":
      return axios.get(url, { params, headers });
    default:
      return Promise.reject({ response: { data: { Status: { message: "This API method is not available" } } } });
  }
};

const request = options => {
  return fetch(options)
    .then(response => {
      const { data } = response;
      return Promise.resolve(data);
    })
    .catch(error => {
      const {
        response: { data }
      } = error;
      return Promise.reject(data);
    });
};

export default request;
