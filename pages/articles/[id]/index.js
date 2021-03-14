import server from '../../../config';
import styles from '../../../styles/Home.module.css';
import TabTitle from '../../../components/TabTitle';

const article = ({ article }) => (
  <div className={styles.container}>
    <TabTitle title={article.title} />
    <div>{ article.description }</div>
  </div>
);

export default article;

export const getServerSideProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};