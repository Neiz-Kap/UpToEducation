import {
  // ---- Courses Routes ------
  COURSE_CATALOG_ROUTE,
  COURSE_ROUTE,
  CHOISE_COURSES_ROUTE,
  MY_COURSES_ROUTE,
  CHAT_ROUTE,
  INFO_ROUTE,
  FAQ_ROUTE,
  ACCOUNT_ROUTE,
  ADMIN_ROUTE,
  ADMIN_COURSES_ROUTE,
} from "./Utils/consts.js";

import {
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

export const publicRoutes = [
  {
    path: INFO_ROUTE,
    Component: InfoPage,
  },
  {
    path: FAQ_ROUTE,
    Component: HelpPage,
  },
  {
    path: COURSE_CATALOG_ROUTE,
    Component: CourseCatalogPage,
  },
  {
    path: COURSE_ROUTE + ":id",
    Component: CoursePage,
  },
  {
    path: COURSE_ROUTE,
    Component: CoursesPage,
  },
];

export const authRoutes = [
  {
    path: MY_COURSES_ROUTE,
    Component: MyCoursesPage,
  },
  {
    path: CHOISE_COURSES_ROUTE,
    Component: ChoiseCoursesPage,
  },
  {
    path: ACCOUNT_ROUTE,
    Component: AccountPage,
  },
  {
    path: CHAT_ROUTE,
    Component: ChatPage,
  },
];

export const authAdminRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: AdminPage,
  },
  {
    path: ADMIN_COURSES_ROUTE,
    Component: UnmoderCoursesPage,
  },
];
