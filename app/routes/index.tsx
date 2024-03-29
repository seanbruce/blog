import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import BlogLink from "~/components/blog-link";
import * as blog1 from "./posts/how-to-use-external-store-in-react.mdx";
import { format } from "date-fns";

type MdxImport = {
  filename: string;
  attributes: any;
};

function blogFromModule(mod: MdxImport): {
  slug: string;
  title: string;
  date: string;
  [key: string]: any;
} {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
    date: format(mod.attributes.meta.date, "yyyy-MM-dd"),
  };
}

type LoaderData = ReturnType<typeof blogFromModule>[];

export const loader: LoaderFunction = async () => {
  return json<LoaderData>([blogFromModule(blog1)]);
};

export default function Index() {
  const blogs = useLoaderData() as LoaderData;
  return (
    <ul>
      {blogs.map((blog) => (
        <BlogLink key={blog.slug} {...blog} />
      ))}
    </ul>
  );
}
