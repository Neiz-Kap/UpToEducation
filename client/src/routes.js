import {
  // ---- Courses Routes ------
  COURSE_CATALOG_ROUTE,
  COURSE_ROUTE,
  CHOISE_COURSES_ROUTE,
  MY_COURSES_ROUTE,
  COURSE_CATALOG_FULL_ROUTE,
  // Info for user Routes
  INFO_FULL_ROUTE,
  INFO_ROUTE,
  DEVELOP_ROUTE,
  FAQ_ROUTE,
  HELP_ROUTE,
  SUPPORT_ROUTE,
  // Auth Routes
  ACCOUNT_ROUTE,
  CHAT_ROUTE,
  // Admin Routes
  ADMIN_ROUTE,
  ADMIN_COURSES_ROUTE,
  ADMIN_COURSES_FULL_ROUTE,
} from "./Utils/consts.js";

import { Navigate } from "react-router-dom";
import {
  NotFound,
  NotAccess,
  AuthRedirectModal,
  // --- Pages ---
  // Info Pages
  ForUserPage,
  InfoPage,
  DevelopPage,
  FAQPage,
  HelpPage,
  SupportPage,
  // Courses Pages
  CoursesPage,
  CourseCatalogPage,
  CoursePage,
  MyCoursesPage,
  ChoiseCoursesPage,
  // Auth Pages
  AccountPage,
  ChatPage,
  // Admin Pages
  AdminPage,
  UnmoderCoursesPage,
} from "./Pages";

export const routes = (isAuth, isAdmin) => {
  const pages = [
    // authAdminRoutes
    {
      path: ADMIN_ROUTE,
      element: isAdmin ? <AdminPage /> : <NotAccess />,
      children: [
        {
          path: "",
          element: <Navigate to={ADMIN_COURSES_FULL_ROUTE} replace />,
        },
        {
          path: ADMIN_COURSES_ROUTE,
          element: isAdmin ? <UnmoderCoursesPage /> : <NotAccess />,
        },
      ],
    },

    // authRoutes
    {
      path: ACCOUNT_ROUTE,
      element: isAuth ? <AccountPage /> : <AuthRedirectModal />,
    },
    {
      path: CHAT_ROUTE,
      element: isAuth ? <ChatPage /> : <AuthRedirectModal />,
    },
    // publicRoutes
    {
      path: "/",
      element: <Navigate to={COURSE_CATALOG_FULL_ROUTE} replace />,
    },
    {
      path: FAQ_ROUTE,
      element: <HelpPage />,
    },
    {
      path: INFO_ROUTE,
      element: <ForUserPage />,
      children: [
        {
          path: "",
          element: <Navigate to={INFO_FULL_ROUTE} replace />,
        },
        {
          path: "info",
          element: <InfoPage />,
        },
        { path: DEVELOP_ROUTE, element: <DevelopPage /> },
        {
          path: FAQ_ROUTE,
          element: <FAQPage />,
        },
        {
          path: HELP_ROUTE,
          element: <HelpPage />,
        },
        {
          path: SUPPORT_ROUTE,
          element: <SupportPage />,
        },
      ],
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
        {
          path: COURSE_ROUTE + ":id",
          element: <CoursePage />,
        },
        {
          path: MY_COURSES_ROUTE,
          element: isAuth ? <MyCoursesPage /> : <AuthRedirectModal />,
        },
        {
          path: CHOISE_COURSES_ROUTE,
          element: isAuth ? <ChoiseCoursesPage /> : <AuthRedirectModal />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  return pages;
};
