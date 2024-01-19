export interface TUserInfo {
  jwt: string;
  exp: number;
}

export interface TPerfume {
  // 정리 필요
  fragranceId?: number;
  fragranceName?: string;
  thumbnail?: string;
  brandName?: string;
  style?: string[];
  poster?: string;
  id?: number;
  perfumeName?: string;
  category?: string;
  imageUrl?: string;
  option?: string;
  price?: number;
  capacity?: string;
  scraped?: boolean;
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
