import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      MyPage
      <button
        onClick={() => {
          navigate("/my-post");
        }}
      >
        내가 쓴 게시글 목록
      </button>
      <button
        onClick={() => {
          navigate("/my-course");
        }}
      >
        코스 목록
      </button>
      <button
        onClick={() => {
          navigate("/my-scrap");
        }}
      >
        스크랩한 게시글 목록
      </button>
    </div>
  );
};

export default MyPage;