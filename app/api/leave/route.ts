import { FAILED, SUCCESS } from '@/constants/statusCodes';
import { getSession } from '@/utils/auth';
import { cookies } from 'next/headers';

export const DELETE = async () => {
  const userInfo = getSession();

  if (!userInfo) {
    cookies().delete('jwt');
    cookies().delete('exp');
    cookies().delete('nickname');

    return new Response(FAILED, {
      status: 400,
    });
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/withdrawal`, {
    method: 'DELETE',
    headers: {
      AUTHORIZATION: `Bearer ${userInfo.jwt}`,
    },
    cache: 'no-cache',
  });

  if (res.ok) {
    cookies().delete('jwt');
    cookies().delete('exp');
    cookies().delete('nickname');
    return new Response(SUCCESS, {
      status: 200,
    });
  }

  return new Response(FAILED, {
    status: 400,
  });
};
