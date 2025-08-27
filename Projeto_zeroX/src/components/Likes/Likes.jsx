import React, { useState } from "react";
import likeImg from "../../assets/like.png";
import unlikedImg from "../../assets/unliked.png";

function Like() {
  const [like, setLike] = useState(false);
  const [numeroLikes, setNumeroLikes] = useState(50);

  const darLike = () => {
    if (like) {
      setNumeroLikes(numeroLikes - 1);
      setLike(false);
    } else {
      setNumeroLikes(numeroLikes + 1);
      setLike(true);
    }
  };

  return (
    <>
      <button className="like-btn" onClick={darLike}>
        <img src={like ? likeImg : unlikedImg} alt="" />
        <h2>{numeroLikes}</h2>
      </button>
    </>
  );
}

export default Like;
