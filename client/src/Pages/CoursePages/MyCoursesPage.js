import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import { useCustomContext } from "./../../Hooks";
import { fetchAddedCourses } from "../../HTTP/addedCoursesAPI";

import { CourseList } from "./../../Components";
import AddCourseButton from "./../../Components/AddCourse/AddCourseButton";

const MyCoursesPage = observer((props) => {
  const { course } = useCustomContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAddedCourses()
      .then((courses) => {
        course.setAddedCourseData(courses);
        console.log(`courses: ${JSON.stringify(courses, null, 2)}`);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  }, [course]);

  return (
    <section className="content__section">
      <h2>Добавленные мною курсы</h2>
      <CourseList
        list={course.addedCourseData.moderated}
        isLoading={isLoading}
        countPlaceholder={3}
        // altText={`На данный момент у вас нет собственных курсов!`}
      >
        <AddCourseButton />
      </CourseList>
      {course.addedCourseData.unmoderated && (
        <>
          <h2 className="mt-3">На модерации</h2>
          <CourseList
            list={course.addedCourseData.unmoderated}
            isLoading={isLoading}
            countPlaceholder={4}
            // altText={`На данный момент у вас нет собственных курсов!`}
          />
        </>
      )}
    </section>
  );
});

export default MyCoursesPage;
