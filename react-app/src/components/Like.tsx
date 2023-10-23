import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

interface LikeProps {
  onClick: () => void;
}

const Like = ({ onClick }: LikeProps) => {
  const [Liked, setLiked] = useState(false);
  const toggle = () => {
    setLiked(!Liked);
    onClick();
  };
  return (
    <div>
      <AiFillHeart
        onClick={toggle}
        style={{ margin: "5px" }}
        size={20}
        color={Liked === false ? "black" : "red"}
      />
    </div>
  );
};

export default Like;
