// public
import { ACCOUNT_ROUTE, CHOISE_ROUTE, CHAT_ROUTE } from './Utils/consts.js';
// Auth
import {INFO_ROUTE, FAQ_ROUTE, CATALOG_ROUTE, CARD_ROUTE} from './Utils/consts.js';

import {
	InfoPage,
	HelpPage,
	CatalogPage,
	CardPage,

	MyCoursesPage,
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
        Component: CatalogPage,
    },
    {
        path: CARD_ROUTE + '/:id',
		Component: CardPage,
    },

]

export const authRoutes = [
	{
		path: CHOISE_ROUTE,
		Component: MyCoursesPage,
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
