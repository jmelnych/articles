import Link from 'next/link';

const ArticleItem = ({ article }) => (
  <Link href="/articles/[id]" as={`/articles/${article.id}`}><h3>{article.title}</h3></Link>
);

export default ArticleItem;
