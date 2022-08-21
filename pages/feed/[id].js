import Head from 'next/head';
import Link  from 'next/link';
import styles from '../../styles/feed.module.css';
import Navbar  from '../../components/Navbar';

export const feed = ({ articles, pageNumber }) => {

  return articles.length ? (
    <>      
      <div className="page-container">
        <Navbar />

        <div className={styles.main}>
          {articles.map((article, index) => (
            <div key={index} className={styles.post}>
              <h1 onClick={() => (window.location.href = article.url)}>{article.title}</h1>
              <p>{article.description}</p>
              {!!article.urlToImage && <img src={article.urlToImage} />}
            </div>
          ))}
        </div>

        <div className={styles.paginator}>
        <div className={pageNumber === 1 ? styles.disabled : styles.active}>
          <Link href={`/feed/${pageNumber - 1}`}>
            Previous Page
          </Link></div>

          <div>#{pageNumber}</div>

          <div className={pageNumber === 5 ? styles.disabled : styles.active}>
          <Link href={`/feed/${pageNumber + 1}`}>
            Next Page
          </Link></div>
        </div>
      </div>
    </>
  ) : (
    <div className="page-container">
      <Navbar />
      <div className={styles.main}>
        <h1>Oops! No articles for this page</h1>
      </div>
    </div>
  );
};

export const getServerSideProps = async pageContext => {
  const pageNumber = pageContext.query.id;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    },
  ).then(res => res.json());

  const { articles } = apiResponse;

  return {
    props: {
      articles: articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default feed;