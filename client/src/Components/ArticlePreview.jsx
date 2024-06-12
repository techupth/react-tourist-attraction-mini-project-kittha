function ArticlePreview(props) {
  const article = props.article;
  return (
    <>
      <h1>hello preview</h1>
      <p>{article.title}</p>
    </>
  );
}
export default ArticlePreview;
