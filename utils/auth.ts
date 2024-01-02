import { TUserInfo } from '@/types';
import { cookies } from 'next/headers';

export const getSession = () => {
  const cookieStore = cookies();
  const stored = cookieStore.get('user_info');
  if (!stored) {
    return null;
  }
  const userInfo: TUserInfo = JSON.parse(stored.value);
  if (userInfo.accessTokenExpires < new Date().getTime()) {
    // cookieStore.delete('user_info');
    return null;
  }
  return userInfo;
};
