import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, handleClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} style={style} onClick={() => handleClick(i)}>
          {rating > i ? (
            <AiFillStar size={23} className="rating title" />
          ) : (
            <AiOutlineStar size={23} className="rating title" />
          )}
        </span>
      ))}
    </>
  );
};

export default Rating;
