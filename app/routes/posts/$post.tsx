import { useLoaderData, useParams } from "remix"
import { db } from "~/utils/db.server"



export async function loader({ params }) {
  const post = await db.post.findUnique({
    where: {
      id: params.post,
    },
  })
  return post;
}


export default function PostItem() {
  const param = useParams()
  const post = useLoaderData()
  return (
    <>
      <h1 className="title">{post.title} </h1>
      <div className="container">
        <p className="lyrics">{post.content}</p>
        <em>Added on {new Date(post.createdAt).toDateString()}</em>
      </div>
    </>
  )
}
