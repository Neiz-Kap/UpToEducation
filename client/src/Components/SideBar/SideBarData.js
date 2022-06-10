import course from "../../Assets/sidebar/course.svg";
import info from "../../Assets/sidebar/info.svg";
import help from "../../Assets/sidebar/help.svg";
import profile from "../../Assets/header/profile.svg";

import arrowUp from "../../Assets/sidebar/arrowUp.svg";
import arrowDown from "../../Assets/sidebar/arrowDown.svg";

import plus from "../../Assets/sidebar/plus.svg";
import star from "../../Assets/sidebar/star.svg";

import {
  COURSE_CATALOG_FULL_ROUTE,
  // CHOISE_COURSES_FULL_ROUTE,
  // MY_COURSES_FULL_ROUTE,
  FAQ_ROUTE,
  INFO_ROUTE,
  ACCOUNT_ROUTE,
  CHAT_ROUTE,
  ADMIN_ROUTE,
} from "../../Utils/consts";

export const SidebarData = (isAdmin) => [
  {
    id: 1,
    title: "Course Catalog",
    path: COURSE_CATALOG_FULL_ROUTE,
    icon: course,
    isPublic: true,
    iconClosed: arrowDown,
    iconOpened: arrowUp,

    // subNav: [
    //   {
    //     title: "Course Catalog",
    //     path: COURSE_CATALOG_FULL_ROUTE,
    //     icon: "",
    //   },
    //   {
    //     title: "Choise Courses",
    //     path: CHOISE_COURSES_FULL_ROUTE,
    //     icon: star,
    //   },
    //   {
    //     title: "My Courses",
    //     path: MY_COURSES_FULL_ROUTE,
    //     icon: plus,
    //   },
    // ],
  },
  {
    id: 2,
    title: "Personal Area",
    path: ACCOUNT_ROUTE,
    icon: profile,
    isPublic: true,
  },
  {
    id: 3,
    title: "Info For User",
    path: INFO_ROUTE,
    icon: info,
    isPublic: true,
    iconClosed: arrowDown,
    iconOpened: arrowUp,

    // subNav: [
    //   {
    //     title: "Reports",
    //     path: "/reports/reports1",
    //     icon: "",
    //     cName: "sub-nav",
    //   },
    //   {
    //     title: "Reports 2",
    //     path: "/reports/reports2",
    //     icon: "",
    //     cName: "sub-nav",
    //   },
    //   {
    //     title: "Reports 3",
    //     path: "/reports/reports3",
    //     icon: "",
    //   },
    // ],
  },
  {
    id: 4,
    title: "Messages | Chat",
    path: CHAT_ROUTE,
    icon: profile,
    isPublic: false,
  },
  {
    id: 5,
    title: "CMS | Admin",
    path: ADMIN_ROUTE,
    icon: profile,
    isPublic: isAdmin,
  },
];
