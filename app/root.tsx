import {
  Links,
  Link,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LinksFunction
} from "remix";
import type { MetaFunction } from "remix";

import globalStyles from "~/styles/global.css"

export const meta: MetaFunction = () => {
  return { title: "New Remix App", description: "First try with remix framework" };
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: globalStyles }];
};


export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export const Layout: React.FC = ({ children }) => {
  return (<>
    <nav className="navbar">
      <ul className="navbar-tab">
        <li className="navbar-item">
          <Link to="/">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/posts"> Posts</Link>
        </li>
      </ul>
    </nav>
    {children}
  </>)
}