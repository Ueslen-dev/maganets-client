import { AxiosResponse, AxiosError } from 'axios';

import api from './api';

export const magaNetsBff = api(process.env.NEXT_PUBLIC_MAGANETS_BFF || '');

export const fetchGetAllProducts = async () => {
  const endpoint = '/products';

  return await magaNetsBff
    .get(endpoint)
    .then((response: AxiosResponse) => response.data)
    .catch((error: AxiosError) => error);
};

export default magaNetsBff;
