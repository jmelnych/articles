import { articles } from '../../../db';

export default function handler({ query }, res) {
  const article = articles.filter((article) => article.id === query.id);
  if (article.length) {
    res.status(200).json(article[0]);
  } else {
    res.status(404).json({ message: `Article with ID ${query.id} is not found` });
  }
}
