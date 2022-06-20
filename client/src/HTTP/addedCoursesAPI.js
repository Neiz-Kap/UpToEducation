import { $authHost } from "./index";

export const fetchAddedCourses = async () => {
  const { data } = await $authHost.get("api/addedCourse");
  return data;
};

export const deleteAddedCourse = async (courseId) => {
  const { data } = await $authHost.delete("api/addedCourse/", {
    courseId,
  });
  return data;
};
