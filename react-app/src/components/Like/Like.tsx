import { FaRegHeart } from "react-icons/fa";

interface LikeProps {
  onClick: () => void;
}

const Like = () => {
  return (
    <div>
      <button>
        <FaRegHeart style={{ margin: "5px" }} size={20} />
      </button>
    </div>
  );
};

export default Like;
