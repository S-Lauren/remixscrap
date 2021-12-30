import React from "react";
import { Link, useLoaderData } from "remix";
import Button from "~/components/shared/Button";
import { db } from "~/utils/db.server";


export async function loader() {
  const data = {
    posts: await db.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true
      },
    })
  }
  return data;
}


export default function PostItems() {
  const { posts } = useLoaderData();

  return (
    <div className="main">
      <div className="row">
        <Button title="Add +" url="new" />
      </div>
      <div className="row">
        <div className="col" >
          <h1 className="title"><span>📰</span> Last posts</h1>
        </div>
      </div>
      {posts.map((x: any) => {
        return (
          <React.Fragment key={x.id}>
            <Link to={`${x.id}`}>
              <ul className="post-list">
                <li className="post-description">{x.title}</li>
                <li className="post-likes "><em>{new Date(x.createdAt).toDateString()}</em> </li>
              </ul>
            </Link>
          </React.Fragment>
        )
      })}
    </div>

  )
}
