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
  option: string;
  price: number;
  capacity: string;
}

export interface TBrand {
  id: number;
  brandNameKor: string;
  brandNameEng: string;
  imageUrl: string;
}

export interface TUserReview {
  brandName: string;
  perfumeName: string;
  perfumeId: number;
  content: string;
  rating: number;
  imageUrl: string;
}
