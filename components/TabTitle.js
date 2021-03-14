import Head from 'next/head';

const TabTitle = ({ title }) => (
  <Head>
    <link rel="icon" href="/favicon.ico" />
    <title>{title}</title>
  </Head>
);

TabTitle.defaultProps = {
  title: 'Articles App',
};

export default TabTitle;
