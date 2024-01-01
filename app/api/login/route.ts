import {
  AUTHORIZED,
  LOGIN_FAILED,
  USERNAME_SETTING_REQUIRED,
} from '@/constants/statusCodes';
import { cookies } from 'next/headers';
// import { NextResponse } from 'next/server';

const EXP_LIMIT = 1000 * 60 * 60 * 24;

export const POST = async (request: Request) => {
  //   cookies().set('test', 'test');
  const body = await request.json();
  const res = await fetch(
    `${process.env.SERVER_URL}/login?code=${body.code}&provider=${body.provider}`,
    { method: 'POST', cache: 'no-cache' },
  );

  if (res.ok) {
    const authInfo = await res.json();
    // console.log(authInfo);
    cookies().set(
      'user_info',
      JSON.stringify({
        ...authInfo,
        // expTime: new Date().getTime() + EXP_LIMIT,
      }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: EXP_LIMIT,
        path: '/',
      },
    );

    if (!authInfo.name)
      return new Response(USERNAME_SETTING_REQUIRED, {
        status: 200,
        statusText: USERNAME_SETTING_REQUIRED,
      });

    return new Response(AUTHORIZED, {
      status: 200,
    });
  }
  return new Response(LOGIN_FAILED, {
    status: 401,
  });
};
