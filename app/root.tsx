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
  useLoaderData,
  useLocation,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import baseStylesheetUrl from "./styles/base.css";
import { getUser } from "./session.server";
import Header from "./components/header";
import clsx from "clsx";
import { getThemeSession } from "./theme.server";
import type { Theme } from "./utils/theme-provider";
import {
  useTheme,
  ThemeProvider,
  NonFlashOfWrongThemeEls,
} from "./utils/theme-provider";
import Footer from "./components/footer";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "stylesheet", href: baseStylesheetUrl },
    {
      rel: "preload",
      as: "font",
      href: "/fonts/RobotoMono-Medium.woff2",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      as: "font",
      href: "/fonts/RobotoMono-Regular.woff2",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
  ];
};

export const meta: MetaFunction = ({ data }) => ({
  charset: "utf-8",
  title: "Sean's Blog",
  viewport: "width=device-width,initial-scale=1, shrink-to-fit=no",
  "theme-color": (data as LoaderData).theme === "dark" ? "#0f172a" : "#fff",
});

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>;
  theme: Theme | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);
  return json<LoaderData>({
    user: await getUser(request),
    theme: themeSession.getTheme(),
  });
};

function App() {
  const [theme] = useTheme();

  return (
    <html lang="en" className={clsx(theme, "h-full", "font-mono")}>
      <head>
        <Meta />
        <Links />
        <NonFlashOfWrongThemeEls ssrTheme={Boolean(theme)} />
      </head>
      <body className="h-full bg-white text-gray-900 transition duration-300 dark:bg-slate-900 dark:text-white	">
        <div className="mx-auto max-w-2xl px-7 py-10">
          <Header />
          <Outlet />
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const { theme } = useLoaderData<LoaderData>();
  return (
    <ThemeProvider specifiedTheme={theme}>
      <App />
    </ThemeProvider>
  );
}

// TODO change style and text
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  const location = useLocation();
  return (
    <html lang="en" className={clsx("h-full", "font-mono")}>
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
  const caught = useCatch();
  const location = useLocation();
  console.error("CatchBoundary", caught);
  if (caught.status === 404) {
    return (
      <html lang="en" className={clsx("h-full", "font-mono")}>
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
