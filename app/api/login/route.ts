import {
  AUTHORIZED,
  // LOGIN_FAILED,
  // USERNAME_SETTING_REQUIRED,
} from '@/constants/statusCodes';
// import { TUserInfo } from '@/types';
import { cookies } from 'next/headers';

const EXP_LIMIT = 1000 * 60 * 60 * 24;

export const POST = async (request: Request) => {
  const body = await request.json();
  cookies().set('jwt', body.jwt, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: EXP_LIMIT,
    path: '/',
  });
  return new Response(AUTHORIZED, {
    status: 200,
  });

  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_SERVER_URL}/login?code=${body.code}&provider=${body.provider}`,
  //   { method: 'POST', cache: 'no-cache' },
  // );

  // if (res.ok) {
  //   const authInfo: TUserInfo = await res.json();
  //   cookies().set(
  //     'user_info',
  //     JSON.stringify({
  //       ...authInfo,
  //     }),
  //     {
  //       httpOnly: true,
  //       secure: process.env.NODE_ENV === 'production',
  //       sameSite: 'strict',
  //       maxAge: EXP_LIMIT,
  //       path: '/',
  //     },
  //   );

  //   if (!authInfo.username)
  //     return new Response(USERNAME_SETTING_REQUIRED, {
  //       status: 200,
  //       statusText: USERNAME_SETTING_REQUIRED,
  //     });

  //   return new Response(AUTHORIZED, {
  //     status: 200,
  //   });
  // }
  // return new Response(LOGIN_FAILED, {
  //   status: 401,
  // });
};
