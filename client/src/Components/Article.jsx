import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Article() {
  const params = useParams();
  const navigate = useNavigate();
  const articleId = params.id;
  const [article, setArticle] = useState({
    description: "",
    eid: "",
    photos: [],
    tags: [],
    title: "",
    url: "",
  });

  useEffect(() => {
    const storedArticles = JSON.parse(localStorage.getItem("articles") || "[]");
    // console.log(storedArticles);

    const foundArticle = storedArticles.find(
      (article) => article.eid === articleId
    );

    if (foundArticle) {
      setArticle(foundArticle);
    }
  }, [articleId]);
  useEffect(() => {
    console.log(article);
  });
  return (
    <>
      <p>{article.title}</p>
      <p>{article.description}</p>
      <p>
        {article.photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Photo ${index + 1}`} />
        ))}
      </p>
      <button onClick={() => navigate("/")}> Back to Home Page</button>
    </>
  );
}
export default Article;
