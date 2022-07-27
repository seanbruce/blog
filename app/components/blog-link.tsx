import { Link } from "@remix-run/react";

type Props = {
  slug: string;
  title: string;
  date: string;
  description?: string;
};

export default function BlogLink({ slug, title, date, description }: Props) {
  return (
    <li key={slug}>
      <h3 className="mt-8 mb-2 text-2xl font-bold text-sky-800 transition duration-300 dark:text-sky-100">
        <Link to={`posts/${slug}`} className="text-inherit">
          {title}
        </Link>
      </h3>
      <div className="text-xs text-slate-500">{date}</div>
      {description ? <div>{description}</div> : null}
    </li>
  );
}
