import course from "../../Assets/sidebar/course.svg";
import info from "../../Assets/sidebar/info.svg";
import help from "../../Assets/sidebar/help.svg";
import profile from "../../Assets/header/profile.svg";

import arrowUp from "../../Assets/sidebar/arrowUp.svg";
import arrowDown from "../../Assets/sidebar/arrowDown.svg";

import plus from "../../Assets/sidebar/plus.svg";
import star from "../../Assets/sidebar/star.svg";

import {
  COURSE_CATALOG_ROUTE,
  CHOISE_COURSES_ROUTE,
  MY_COURSES_ROUTE,
  INFO_ROUTE,
  FAQ_ROUTE,
  ACCOUNT_ROUTE,
} from "../../Utils/consts";

export const SidebarData = [
  {
    id: 1,
    title: "Course Catalog",
    path: COURSE_CATALOG_ROUTE,
    icon: course,
    iconClosed: arrowDown,
    iconOpened: arrowUp,

    // subNav: [
    //   {
    //     title: "Course Catalog",
    //     path: COURSE_CATALOG_ROUTE,
    //     icon: "",
    //   },
    //   {
    //     title: "Choise Courses",
    //     path: CHOISE_COURSES_ROUTE,
    //     icon: star,
    //   },
    //   {
    //     title: "My Courses",
    //     path: MY_COURSES_ROUTE,
    //     icon: plus,
    //   },
    // ],
  },
  {
    id: 2,
    title: "Info",
    path: INFO_ROUTE,
    icon: info,
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
    id: 3,
    title: "Help / Support",
    path: FAQ_ROUTE,
    icon: help,
  },
  {
    id: 4,
    title: "Account",
    path: ACCOUNT_ROUTE,
    icon: profile,
  },
  // {
  //   id: 5,
  //   title: 'Messages',
  //   path: '/messages',
  //   icon: '',

  //   iconClosed: arrowDown,
  //   iconOpened: arrowUp,

  //   subNav: [
  //     {
  //       title: 'Message 1',
  //       path: '/messages/message1',
  //       icon: '',
  //     },
  //     {
  //       title: 'Message 2',
  //       path: '/messages/message2',
  //       icon: '',
  //     }
  //   ]
  // },
];
