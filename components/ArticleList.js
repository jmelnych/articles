import ArticleItem from './ArticleItem';

const ArticleList = ({ articles }) => (
  <>
    <h1>Available articles</h1>
    <div>{ articles.map((article) => <ArticleItem key={article.id} article={article} />) }</div>
  </>
);

export default ArticleList;
