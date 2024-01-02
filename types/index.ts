export interface TUserInfo {
  id: number;
  username: string | null;
  accessToken: string;
  refreshToken: string;
  accessTokenExpires: number;
}
