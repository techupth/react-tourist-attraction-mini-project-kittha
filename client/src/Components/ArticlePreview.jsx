import { Link } from "react-router-dom";
function ArticlePreview(props) {
  const article = props.article;
  return (
    <>
      <div className="flex">
        <img
          src={article.photos[0]}
          className="object-scale-down rounded-3xl h-64"
        />
        <div className="flex-col">
          {" "}
          <h1 className="font-black">
            <Link to={`/articles/page/${article.eid}`}>{article.title}</Link>
          </h1>
          <p>{article.description.substr(0, 100)}</p>
          <Link
            className="text-blue-600 underline"
            target="_blank"
            to={`/articles/page/${article.eid}`}
          >
            อ่านต่อ
          </Link>
          <br />
          <span>หมวด</span>
          {article.tags.map((tag) => tag)}
          <div className="flex">
            {article.photos.slice(1).map((photo) => (
              <img src={photo} className="h-32 object-cover rounded-3xl w-32" />
            ))}
          </div>
          <br />
        </div>
      </div>
      <hr />
    </>
  );
}
export default ArticlePreview;
