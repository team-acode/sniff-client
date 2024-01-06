export interface TUserInfo {
  id: number;
  username: string | null;
  accessToken: string;
  refreshToken: string;
  accessTokenExpires: number;
}

export interface TPerfume {
  id: number;
  perfumeName: string;
  brandName: string;
  category: string;
  imageUrl: string;
}
