import { FAILED, SUCCESS } from '@/constants/statusCodes';
import { getSession } from '@/utils/auth';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

const EXP_LIMIT = 1000 * 60 * 60 * 24;

export async function PATCH(request: NextRequest) {
  const userInfo = getSession();
  if (!userInfo) {
    cookies().delete('jwt');
    cookies().delete('exp');
    cookies().delete('nickname');
    if (!userInfo)
      return new Response(FAILED, {
        status: 400,
      });
  }

  const body = await request.json();
  const { username } = body;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/nickname/${username}`,
    {
      headers: {
        AUTHORIZATION: `Bearer ${userInfo.jwt}`,
      },
      method: 'PUT',
      cache: 'no-cache',
    },
  );

  if (res.ok) {
    cookies().set('nickname', username, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: EXP_LIMIT,
      path: '/',
    });

    return new Response(SUCCESS, {
      status: 200,
    });
  }

  return new Response(FAILED, {
    status: 400,
  });
}
