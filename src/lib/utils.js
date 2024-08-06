import axios from "axios";
import qs from "qs";

export function flattenAttributes(data) {
  if (
    typeof data !== "object" ||
    data === null ||
    data instanceof Date ||
    typeof data === "function"
  ) {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map((item) => flattenAttributes(item));
  }

  let flattened = {};

  for (let key in data) {
    if (!data.hasOwnProperty(key)) continue;

    if (
      (key === "attributes" || key === "data") &&
      typeof data[key] === "object" &&
      !Array.isArray(data[key])
    ) {
      Object.assign(flattened, flattenAttributes(data[key]));
    } else {
      flattened[key] = flattenAttributes(data[key]);
    }
  }

  return flattened;
}

export function getStrapiURL(path = "") {
  return `http://34.207.150.154:1339${path}`;
}

export function strapiUrl() {
  return "http://34.207.150.154:1339";
}
// export function getStrapiURL(path = "") {
//   return `http://localhost:1337${path}`;
// }

// export function strapiUrl() {
//   return "http://localhost:1337";
// }

export async function fetchStrapiData(url, params = {}) {
  try {
    const queryString = qs.stringify(params, { encode: false });
    const response = await axios.get(`${url}?${queryString}`);
    return flattenAttributes(response.data.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
