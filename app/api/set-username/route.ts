import { FAILED, SUCCESS } from '@/constants/statusCodes';
import { cookies } from 'next/headers';

const EXP_LIMIT = 1000 * 60 * 60 * 24;

export async function PATCH(request: Request) {
  const body = await request.json();
  const username = body.username;
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
    const authInfo = await res.json();
    cookies().set(
      'user_info',
      JSON.stringify({
        ...authInfo,
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
