import { ReactElement } from 'react';

import Header from 'components/Header';
import ListProducts from 'components/ListProducts';

const Home = () => {
  return <ListProducts />;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};
export default Home;
