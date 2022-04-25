import {
  ACCOUNT_ROUTE, CHOISE_ROUTE, CHAT_ROUTE,
  INFO_ROUTE, FAQ_ROUTE,
  MY_COURSES_ROUTE, COURSE_ROUTE, CATALOG_ROUTE
} from './Utils/consts.js';

import {
  InfoPage,
  HelpPage,
  CourseCatalogPage,
  CoursePage,
  MyCoursesPage,
  ChoiseCoursesPage,
  AccountPage,
  ChatPage,
} from './Pages'


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
    path: CATALOG_ROUTE,
    Component: CourseCatalogPage
  },
  {
    path: COURSE_ROUTE + ':id',
    Component: CoursePage,
  },
]

export const authRoutes = [
  {
    path: MY_COURSES_ROUTE,
    Component: MyCoursesPage,
  },
  {
    path: CHOISE_ROUTE,
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
]