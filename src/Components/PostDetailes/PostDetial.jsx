import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetial = () => {
  const post = useLoaderData();
  const params = useParams();
  const navigate = useNavigate();
  const {id, title, body} = post;

  const handleGoBack = () => {
    navigate(-1);
  }

  console.log(params);
  return (
    <div>
      <h3>Post Details About: {id}</h3>
      <p>Title: {title}</p>
      <p><small>{body}</small></p>
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );
};

export default PostDetial;