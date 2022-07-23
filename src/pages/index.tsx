import { ReactElement } from 'react';

import Header from 'components/Header';

const Home = () => {
  return <h1>Página principal</h1>;
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
