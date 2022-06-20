import { $authHost, $host } from "./index";

// get courses
export const fetchCourses = async (
  isModerated = false,
  occupationId,
  authorId,
  page = 1,
  limit = 10
) => {
  const { data } = await $host.get("api/course", {
    params: {
      isModerated,
      occupationId,
      authorId,
      page,
      limit,
    },
  });
  return data;
};

export const fetchCourse = async (id) => {
  const { data } = await $host.get("api/course/" + id);
  return data;
};

// create course
export const createCourse = async (course) => {
  const { data } = await $authHost.post("api/course", course);
  return data;
};

// update course
export const updateCourse = async (updateCourse) => {
  const { data } = await $authHost.put("api/course/", updateCourse);
  return data;
};

// remove course
export const deleteCourse = async (id) => {
  const { data } = await $authHost.delete("api/course/", { data: { id } });
  return data;
};

export const createType = async (occupation) => {
  const { data } = await $authHost.post("api/occupation", occupation);
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
