import { SERVER_LINK } from "./consts";
export const getUrl = (links, isFullLink = false) => {
  return (
    (isFullLink ? SERVER_LINK : "") +
    links.reduce((fullLink, link) => fullLink + link)
  );
};
