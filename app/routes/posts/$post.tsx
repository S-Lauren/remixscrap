import { useParams } from "remix"


export default function PostItem() {
  const param = useParams()
  return (
    <div>
      <h1 className="title">Post {param.post} </h1>
    </div>
  )
}
