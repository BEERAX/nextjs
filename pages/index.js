import Head from 'next/head';
import Article from '../components/Article.js'

export default function Home({articles}) {
  return (
    <div>
      <Head>
        <title>Next JS Crash Course</title>
        <meta
          name='keywords'
          content='next js, web development, front-end dev, programming'
        />
      </Head>
     <Article articles={articles}/>
     
    </div>
  );
}

/* Fake API from jsonplaceholder */
export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=7`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
