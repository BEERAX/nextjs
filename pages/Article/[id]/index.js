// sample template for nested routing dynamic routes

import { useRouter } from 'next/router';

const Article = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h3>This is Article {id}</h3>
    </div>
  );
};

export default Article;
