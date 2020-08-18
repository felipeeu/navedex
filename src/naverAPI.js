import axios from "axios";
export const API = "https://navedex-api.herokuapp.com/v1";

export const loginUser = async params => {
  try {
    const response = await axios.post(`${API}/users/login`, {
      ...params
    });

    if (response) return localStorage.setItem("token", response.data.token);
  } catch (exception) {
    throw `Failed to login. ${exception.toString()}`;
  }
};

let token = localStorage.getItem("token");

export const headers = {
  Accept: "application/json",
  Authorization: "Bearer" + " " + token,
  "Content-Type": "application/json"
};

const axiosInstance = axios.create({
  baseURL: API,
  headers: headers
});

export const getNavers = async () => {
  try {
    const response = await axiosInstance.get("/navers?");

    if (response) return response;
  } catch (exception) {
    throw `Failed to get navers. ${exception.toString()}`;
  }
};

export const getNaversById = async naverId => {
  try {
    const response = await axiosInstance.get(`/navers/${naverId}`);

    if (response) return response;
  } catch (exception) {
    throw `Failed to get navers by id. ${exception.toString()}`;
  }
};

export const createNaver = async params => {
  try {
    const response = await axiosInstance.post(`/navers`, { ...params });

    if (response) return response;
  } catch (exception) {
    throw `Failed to get navers by id. ${exception.toString()}`;
  }
};

export const deleteNaver = async naverId => {
  try {
    const response = await axiosInstance.delete(`/navers/${naverId}`);

    if (response) return response;
  } catch (exception) {
    throw `Failed to get navers by id. ${exception.toString()}`;
  }
};

export const updateNaver = async (naverId , params )=> {
  try {
    const response = await axiosInstance.put(`/navers/${naverId}`, {...params});

    if (response) return response;
  } catch (exception) {
    throw `Failed to get navers by id. ${exception.toString()}`;
  }
};
