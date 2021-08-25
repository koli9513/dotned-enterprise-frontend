import axios from "axios";

const BASE_URL = "https://localhost:44309/api/";
const header = {
  headers: {
    "Content-type": "application/json",
  },
};

export const ENDPOINTS = {
  EVENT: "EventItems",
};

export const createAPIEndpoint = (endpoint) => {
  let url = BASE_URL + endpoint + "/";
  return {
    fetchAll: () => axios.get(url),
    fetchById: (id) => axios.get(url + id),
    create: (newRecord) => axios.post(url, newRecord, header),
    update: (id, updatedRecord) => axios.put(url + id, updatedRecord, header),
    delete: (id) => axios.delete(url + id),
  };
};
