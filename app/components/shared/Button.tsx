

import React from "react";
import { Link } from "remix";

interface ButtonProps {
  title: string;
  url: string;
}

const Button: React.FC<ButtonProps> = ({ title, url }) => {
  return (

    <div className="btn-container">
      <button className="add-btn" >
        <p className="title-btn">
          <Link to={`${url}`}>
            {title}
          </Link>
        </p>
      </button>
    </div>

  )
}
export default Button; 