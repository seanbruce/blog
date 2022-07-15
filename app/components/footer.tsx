import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="mt-20 flex flex-col gap-y-2">
      <Link to="about-me">About me</Link>
      <Link to="twitter">twitter</Link>
      <Link to="rss">RSS</Link>
    </footer>
  );
}
