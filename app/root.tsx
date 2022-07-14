import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLocation,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import { getUser } from "./session.server";
import useDarkMode from "~/hooks/use-dark-mode";
import Header from "./components/header";
import clsx from "clsx";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Sean's Blog",
  viewport: "width=device-width,initial-scale=1, shrink-to-fit=no",
});

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({
    user: await getUser(request),
  });
};

export default function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <html lang="en" className={clsx({ "h-full": true, dark: darkMode })}>
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-white p-7 text-gray-900 dark:bg-slate-900 dark:text-white">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

// TODO change style and text
export function ErrorBoundary({ error }: { error: Error }) {
  const { darkMode } = useDarkMode();
  console.error(error);
  const location = useLocation();
  return (
    <html lang="en" className={clsx({ "h-full": true, dark: darkMode })}>
      <head>
        <title>500</title>
        <Links />
      </head>
      <body className="h-full bg-white text-gray-900 dark:bg-slate-900 dark:text-white">
        <h1>500 - Oh no, something did not go well.</h1>
        <p>"{location.pathname}" is currently not working. So sorry.</p>
        <Link to="/">go to home</Link>
        <Scripts />
      </body>
    </html>
  );
}

// TODO change style and text
export function CatchBoundary() {
  const { darkMode } = useDarkMode();
  const caught = useCatch();
  const location = useLocation();
  console.error("CatchBoundary", caught);
  if (caught.status === 404) {
    return (
      <html lang="en" className={clsx({ "h-full": true, dark: darkMode })}>
        <head>
          <title>404</title>
          <Links />
        </head>
        <body className="h-full bg-white text-gray-900 dark:bg-slate-900 dark:text-white">
          <h1>404 - Oh no, you found a page that's missing stuff.</h1>
          <p>"{location.pathname}" is not a page on seanbruce.io. So sorry.</p>
          <Link to="/">go to home</Link>
          <Scripts />
        </body>
      </html>
    );
  }
  throw new Error(`Unhandled error: ${caught.status}`);
}
