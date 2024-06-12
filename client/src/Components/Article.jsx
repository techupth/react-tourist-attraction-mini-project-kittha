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
  //   useEffect(() => {
  //     console.log(article);
  //   });
  return (
    <>
      <h1 className="font-black text-3xl text-center p-4">{article.title}</h1>
      <p className="p-4">{article.description}</p>
      <div className="flex flex-col items-center gap-5 p-4">
        {article.photos.map((photo, index) => (
          <img className="w-[250px]" key={index} src={photo} />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="m-4 p-4 bg-sky-400 hover:bg-sky-700 active:bg-sky-100 rounded-3xl"
          onClick={() => navigate("/")}
        >
          {" "}
          Back to Home Page
        </button>
      </div>
    </>
  );
}
export default Article;
