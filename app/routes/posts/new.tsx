import { redirect } from "remix"
import { db } from "~/utils/db.server";



export const action = async ({ request }) => {

  const form = await request.formData()
  const title = form.get("title");
  const content = form.get("content");

  const fields = { title, content }

  await db.post.create({ data: { title: fields.title, content: fields.content } })
  return redirect('/posts')
}


export default function Post() {
  return (
    <div>
      <h1 className="title"> New post </h1>
      <form method="POST">
        <div className="form-container">
          <label className="label-title">Title</label>
          <input required type="text" name="title" id="title" />
          <label className="label-title">content</label>
          <textarea required name="content" id="content" />
        </div>
        <div className="button-container ">
          <button type="submit" className="add-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}


export function ErrorBoundary({ error }) {
  return (
    <>
      <h1>Error</h1>
      <p>{error.message}</p>
    </>
  )
}