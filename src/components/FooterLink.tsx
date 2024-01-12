import "../styles/Footer.scss";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FooterLink = ({ linkData }: any) => {
  return (
    <div className="ftr-item">
      <h4 className="ftr-item-title text-lg">{linkData.title}</h4>
      <ul className="ftr-nav-links">
        {linkData.links.map(
          (
            link:
              | string
              | number
              | boolean
              | ReactElement<unknown, string | JSXElementConstructor<unknown>>
              | Iterable<ReactNode>
              | ReactPortal
              | null
              | undefined,
            index: Key | null | undefined
          ) => {
            return (
              <li className="ftr-nav-item" key={index}>
                <a href="#" className="ftr-nav-link text-base">
                  {link}
                </a>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default FooterLink;
