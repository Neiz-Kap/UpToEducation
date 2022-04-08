import {
  MY_COURSES_ROUTE,
  CARD_ROUTE,
  CATALOG_ROUTE
} from "./Utils/consts"
// public
// import { ACCOUNT_ROUTE, CHOISE_ROUTE, CHAT_ROUTE } from './Utils/consts.js';
// Auth
// import { INFO_ROUTE, FAQ_ROUTE, CATALOG_ROUTE, CARD_ROUTE } from './Utils/consts.js';
// import { Basket } from "./Pages/Basket";
import CatalogPage from "./Pages/CatalogPage";
import DevicePage from "./Pages/DevicePage";
import Basket from "./Pages/Basket";

// import {
//   InfoPage,
//   HelpPage,
//   CatalogPage,
//   CardPage,

//   MyCoursesPage,
//   AccountPage,
//   ChatPage,
// } from './Pages'


export const publicRoutes = [
  // {
  //   path: INFO_ROUTE,
  //   Component: InfoPage,
  // },
  // {
  //   path: FAQ_ROUTE,
  //   Component: HelpPage,
  // },
  {
    path: CATALOG_ROUTE,
    Component: CatalogPage
  },
  {
    path: CARD_ROUTE + '/:id',
    Component: DevicePage,
    // Component: CardPage,
  },
]

export const authRoutes = [
  {
    path: MY_COURSES_ROUTE,
    Component: Basket
    // Component: MyCoursesPage,
  },
  // {
  //   path: CHOISE_ROUTE,
  //   Component: MyCoursesPage,
  // },
  // {
  //   path: ACCOUNT_ROUTE,
  //   Component: AccountPage,
  // },
  // {
  //   path: CHAT_ROUTE,
  //   Component: ChatPage,
  // },
]