import React from "react";
import { Link, useLoaderData } from "remix";
import Button from "~/components/shared/Button";


export function loader() {
  const data = {
    reviews: [
      {
        id: 1, description: 'Shut the fuck up', likes: 3,
      }, {
        id: 2, description: 'Dirty, Money Ima Make you Look Dirty Poke it Out', likes: 500,
      },
      {
        id: 3, description: 'Who You gonna call when your trends are all die ?', likes: 48,
      },
      {
        id: 4, description: 'Negro, Blanco, Rico Pueblo, O Sangé Da Mesma Coooore ! Somos Todos Iguas, Sentiamos Alegria Y Dor', likes: 200,
      },
      {
        id: 5, description: 'Disrespect Hip Hop, And Ill Spit in Your Face(..) Blessing It.', likes: 140,
      },
    ]
  }
  return data;
}


export default function PostItems() {
  const { reviews } = useLoaderData();
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
      {reviews.map((x: any) => {
        return (
          <React.Fragment key={x.id}>
            <Link to={`${x.id}`}>
              <ul className="post-list">
                <li className="post-description">{x.description}</li>
                <li className="post-likes "><em>{x.likes} <span>👍</span></em> </li>
              </ul>
            </Link>
          </React.Fragment>
        )
      })}
    </div>

  )
}
