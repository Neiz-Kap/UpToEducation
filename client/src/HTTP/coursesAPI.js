import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

// получение всех и одного
export const fetchCourses = async (
  occupationId,
  authorId,
  page = 1,
  limit = 10
) => {
  const { data } = await $host.get("api/card", {
    params: {
      occupationId,
      authorId,
      page,
      limit,
    },
  });
  return data;
};

export const fetchCourse = async (id) => {
  const { data } = await $host.get("api/card/" + id);
  return data;
};

export const fetchDevices = async (
  occupationId,
  authorId,
  page = 1,
  limit = 10
) => {
  const { data } = await $host.get("api/card", {
    params: {
      occupationId,
      authorId,
      page,
      limit,
    },
  });
  return data;
};

// ready
export const fetchOneDevice = async (id) => {
  const { data } = await $host.get("api/card/" + id);
  return data;
};

// создаие товара
export const createCourse = async (course) => {
  const { data } = await $authHost.post("api/card", course);
  return data;
};

// ready
export const createDevice = async (course) => {
  const { data } = await $authHost.post("api/card", course); // ready
  return data;
};

// обновление курса
export const updateCourse = async (updateCourse) => {
  const { data } = await $authHost.put("api/card/", updateCourse);
  return data;
};

// удаление курса
export const deleteCourse = async (course_id) => {
  const { data } = await $authHost.delete("api/card/" + course_id);
  return data;
};

// ready
export const createType = async (occupation) => {
  const { data } = await $authHost.post("api/occupation", occupation);
  return data;
};
// ready
export const fetchTypes = async () => {
  const { data } = await $host.get("api/occupation");
  return data;
};
export const fetchOccupations = async () => {
  const { data } = await $host.get("api/occupation");
  return data;
};
// ready
export const createBrand = async (author) => {
  const { data } = await $authHost.post("api/author", author);
  return data;
};
// ready
export const fetchBrands = async () => {
  const { data } = await $host.get("api/author");
  return data;
};
