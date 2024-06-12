import { Link } from "react-router-dom";
function ArticlePreview(props) {
  const article = props.article;
  const handleAddInput = props.handleAddInput;
  return (
    <>
      <div className="flex justify-around items-center p-4 gap-10">
        <div className="w-[475px] h-[250px] flex flex-wrap">
          <img
            src={article.photos[0]}
            className="p-2 rounded-3xl w1/3 relative aspect-w-1 aspect-h-1 w-full h-full object-cover"
          />
        </div>
        <div className="flex-col w-[475px]">
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
          <span>หมวด </span>
          {article.tags.map((tag, index) => (
            <button
              className="px-1 underline"
              key={index}
              onClick={() => handleAddInput({ tag })}
            >
              {tag}
            </button>
          ))}
          <div className="flex">
            {article.photos.slice(1).map((photo, index) => (
              <img
                key={index}
                src={photo}
                className="h-32 object-cover p-2 rounded-3xl w-32"
              />
            ))}
          </div>
          <br />
        </div>
      </div>
    </>
  );
}
export default ArticlePreview;
