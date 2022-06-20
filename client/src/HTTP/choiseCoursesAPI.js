import { $authHost } from "./index";

export const fetchChoiseCourses = async () => {
  const { data } = await $authHost.get("api/choiseCourse");
  return data;
};

export const createChoiseCourse = async (courseId) => {
  const { data } = await $authHost.post("api/choiseCourse", {
    courseId,
  });
  return data;
};

export const deleteChoiseCourse = async (courseId) => {
  const { data } = await $authHost.delete("api/choiseCourse/", {
    data: { courseId },
  });
  return data;
};
