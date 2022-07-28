import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="mt-20 flex flex-col gap-y-2">
      <Link to="about-me">About me</Link>
      <a
        href="https://twitter.com/seanbruce90"
        target="_blank"
        rel="noreferrer"
      >
        Twitter
      </a>
      {/* <Link to="rss">RSS</Link> */}
    </footer>
  );
}
