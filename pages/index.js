import ArticleList from '../components/ArticleList';
import styles from '../styles/Home.module.css';
import TabTitle from '../components/TabTitle';
import server from '../config';

export default function Home({ articles }) {
  return (
    <div className={styles.container}>
      <TabTitle />
      <ArticleList articles={articles} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
