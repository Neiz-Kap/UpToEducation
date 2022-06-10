export const SERVER_LINK = "http://localhost:8888";

// Course Routes
export const COURSE_ROUTE = "/course";
export const COURSE_CATALOG_ROUTE = "catalog";
export const MY_COURSES_ROUTE = "myCourses";
export const CHOISE_COURSES_ROUTE = "choisesCouses";

export const COURSE_CATALOG_FULL_ROUTE =
  COURSE_ROUTE + "/" + COURSE_CATALOG_ROUTE;
export const MY_COURSES_FULL_ROUTE = COURSE_ROUTE + "/" + MY_COURSES_ROUTE;
export const CHOISE_COURSES_FULL_ROUTE =
  COURSE_ROUTE + "/" + CHOISE_COURSES_ROUTE;

// Info Routes
export const INFO_ROUTE = "/info";
export const DEVELOP_ROUTE = "develop";
export const FAQ_ROUTE = "faq";
export const HELP_ROUTE = "help";
export const SUPPORT_ROUTE = "support";

export const INFO_FULL_ROUTE = INFO_ROUTE + "/" + "info";
export const DEVELOP_FULL_ROUTE = INFO_ROUTE + "/" + DEVELOP_ROUTE;
export const FAQ_FULL_ROUTE = INFO_ROUTE + "/" + FAQ_ROUTE;
export const HELP_FULL_ROUTE = INFO_ROUTE + "/" + HELP_ROUTE;
export const SUPPORT_FULL_ROUTE = INFO_ROUTE + "/" + SUPPORT_ROUTE;

export const ACCOUNT_ROUTE = "/account";
export const CHAT_ROUTE = "/chat";

export const ADMIN_ROUTE = "/admin";
export const ADMIN_COURSES_ROUTE = ADMIN_ROUTE + "/" + "unmoderatedCourses";
