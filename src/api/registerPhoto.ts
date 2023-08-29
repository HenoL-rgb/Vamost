import { AxiosResponse } from 'axios';
import { RegisterPhotoRequest } from 'src/types/api/registerPhoto.types';

import axios from './axios';
import { API_ROUTES } from './constants';

export const registerPhotoRequest = async ({
  data,
  token,
}: RegisterPhotoRequest): Promise<AxiosResponse<string>> => {
  return await axios.post(`${API_ROUTES.baseUrl}${API_ROUTES.userAttributes}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
