import { Link } from "react-router-dom";
import ModalImage from "react-modal-image";
function ArticlePreview(props) {
  const article = props.article;
  const handleAddInput = props.handleAddInput;
  return (
    <>
      <div className="flex flex-col mb-12 md:flex-row justify-around items-center p-4 gap-8">
        <div className="w-full md:w-[375px] h-[250px] flex flex-wrap overflow-hidden rounded-3xl relative">
          <ModalImage
            small={article.photos[0]}
            medium={article.photos[0]}
            large={article.photos[0]}
            className="p-2 rounded-3xl w-full h-full object-cover object-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            hideDownload={true}
            hideZoom={true}
          />
        </div>
        <div className="flex flex-col w-full md:w-[500px]">
          {" "}
          <h1 className="font-black text-sky-400">
            <Link to={`/articles/page/${article.eid}`}>{article.title}</Link>
          </h1>
          <p>{article.description.substr(0, 100)}...</p>
          <Link
            className="text-sky-400 underline"
            to={`/articles/page/${article.eid}`}
          >
            อ่านต่อ
          </Link>
          <div className="flex flex-row justify-between items-center gap-1 text-xs">
            <div>
              <span className="font-semibold">หมวด </span>
              {article.tags.map((tag, index) => (
                <button
                  className="px-1 underline"
                  key={index}
                  onClick={() => handleAddInput({ tag })}
                >
                  {tag}
                </button>
              ))}
            </div>
            <button
              className=" bg-sky-300 hover:bg-sky-700 active:bg-sky-100 w-10 h-10 rounded-full text-white"
              onClick={() => {
                navigator.clipboard.writeText(article.url);
              }}
            >
              Copy Link
            </button>
          </div>
          <div className="flex justify-center flex-wrap md:justify-start mt-4">
            {article.photos.slice(1).map((photo, index) => (
              <ModalImage
                key={index}
                small={photo}
                medium={photo}
                large={photo}
                className="h-20 w-20 object-cover p-2 rounded-3xl md:h-32 md:w-32"
                hideDownload={true}
                hideZoom={true}
              />
            ))}
          </div>
          <br />
          <hr className="w-full md:hidden" />
        </div>
      </div>
    </>
  );
}
export default ArticlePreview;
