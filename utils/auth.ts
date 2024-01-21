import { cookies } from 'next/headers';

export const getSession = () => {
  const cookieStore = cookies();
  const jwt = cookieStore.get('jwt')?.value;
  const exp = Number(cookieStore.get('exp')?.value);
  if (!jwt || !exp) {
    return null;
  }

  if (exp < new Date().getTime()) {
    return null;
  }
  return { jwt, exp };
};

export const getNickname = () => {
  const cookieStore = cookies();
  const nickname = cookieStore.get('nickname')?.value;
  return nickname;
};
