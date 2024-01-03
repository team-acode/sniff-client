import { FAILED, SUCCESS } from '@/constants/statusCodes';
import { getSession } from '@/utils/auth';
import { cookies } from 'next/headers';

const EXP_LIMIT = 1000 * 60 * 60 * 24;

export async function PATCH(request: Request) {
  const userInfo = getSession();
  if (!userInfo)
    return new Response(FAILED, {
      status: 400,
    });

  const body = await request.json();
  const { username } = body;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/mypage/nickname`,
    {
      headers: { 'Content-Type': 'application/json' },
      method: 'PATCH',
      body: JSON.stringify({ username }),
      cache: 'no-cache',
    },
  );

  if (res.ok) {
    cookies().set(
      'user_info',
      JSON.stringify({
        ...userInfo,
        username,
      }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: EXP_LIMIT,
        path: '/',
      },
    );

    return new Response(SUCCESS, {
      status: 200,
    });
  }

  return new Response(FAILED, {
    status: 400,
  });
}
