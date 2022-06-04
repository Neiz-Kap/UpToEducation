import {
  // ---- Courses Routes ------
  COURSE_CATALOG_ROUTE,
  COURSE_ROUTE,
  CHOISE_COURSES_ROUTE,
  MY_COURSES_ROUTE,
  COURSE_CATALOG_FULL_ROUTE,
  CHAT_ROUTE,
  INFO_ROUTE,
  FAQ_ROUTE,
  ACCOUNT_ROUTE,
  ADMIN_ROUTE,
  ADMIN_COURSES_ROUTE,
} from "./Utils/consts.js";

import { Navigate } from "react-router-dom";
import {
  NotFound,
  // Pages
  InfoPage,
  HelpPage,
  CoursesPage,
  CourseCatalogPage,
  CoursePage,
  MyCoursesPage,
  ChoiseCoursesPage,
  AccountPage,
  ChatPage,
  // ---- Admin Pages ------
  AdminPage,
  UnmoderCoursesPage,
} from "./Pages";

export const routes = (isAuth, isAdmin) => {
  const publicRoutes = [
    {
      path: "/",
      element: <Navigate to={COURSE_CATALOG_FULL_ROUTE} replace />,
    },
    {
      path: INFO_ROUTE,
      element: <InfoPage />,
    },
    {
      path: FAQ_ROUTE,
      element: <HelpPage />,
    },
    {
      path: COURSE_ROUTE,
      element: <CoursesPage />,
      children: [
        {
          path: "",
          element: <Navigate to={COURSE_CATALOG_FULL_ROUTE} replace />,
        },
        { path: COURSE_CATALOG_ROUTE, element: <CourseCatalogPage /> },
        { path: CHOISE_COURSES_ROUTE, element: <ChoiseCoursesPage /> },
        { path: MY_COURSES_ROUTE, element: <MyCoursesPage /> },
        {
          path: COURSE_ROUTE + ":id",
          element: <CoursePage />,
        },
      ],
    },
    {
      path: ACCOUNT_ROUTE,
      element: <AccountPage />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  const authRoutes = [
    {
      path: MY_COURSES_ROUTE,
      element: <MyCoursesPage />,
    },
    {
      path: CHOISE_COURSES_ROUTE,
      element: <ChoiseCoursesPage />,
    },
    {
      path: CHAT_ROUTE,
      element: <ChatPage />,
    },
  ];
  const authAdminRoutes = [
    {
      path: ADMIN_ROUTE,
      element: <AdminPage />,
    },
    {
      path: ADMIN_COURSES_ROUTE,
      element: <UnmoderCoursesPage />,
    },
  ];
  return [...publicRoutes, ...authRoutes, ...authAdminRoutes];
};
