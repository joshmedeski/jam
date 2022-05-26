import Component from "./how-i-set-up-prettier.mdx";
import * as post from "./how-i-set-up-prettier.mdx";
import { json, Outlet, useLoaderData } from "remix";
import { Button } from "ui";

function postFromModule(mod) {
  return {
    Component: mod.Component,
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
}

export async function loader() {
  return json(postFromModule(post));
}

export default function BlogPost() {
  const data = useLoaderData();
  return (
    <div className="">
      {JSON.stringify(data)}
      <Button>Hello</Button>
      <Component />
      <Outlet />
    </div>
  );
}
