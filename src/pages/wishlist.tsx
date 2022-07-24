import { ReactElement } from 'react';

import Header from 'components/Header';
import Wishlist from 'components/Wishlist';

const wishlist = () => {
  return <Wishlist />;
};

wishlist.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};
export default wishlist;
