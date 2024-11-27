import { LocalStorageService } from '~/services';

export const isAuthenticated = () => {
  const accessToken = LocalStorageService.get<string>(LocalStorageService.ACCESS_TOKEN);

  return !!accessToken && accessToken.length > 0;
  // return true
};
