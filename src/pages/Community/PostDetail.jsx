import { useNavigate, useParams } from "react-router-dom";

const PostDetail = () => {
  const navigate = useNavigate();
  const { postId } = useParams();

  return (
    <div>
      <div>PostDetail</div>
      <button
        onClick={() => {
          navigate("/post-edit");
        }}
      >
        게시글 수정
      </button>
    </div>
  );
};

export default PostDetail;