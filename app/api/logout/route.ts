import { FAILED, SUCCESS } from '@/constants/statusCodes';
import { NextRequest } from 'next/server';

export const POST = async (request: NextRequest) => {
  const { cookies } = request;
  const jwt = cookies.get('jwt');
  const exp = Number(cookies.get('exp'));

  if (!jwt || !exp || exp < new Date().getTime()) {
    cookies.delete('jwt');
    cookies.delete('exp');
    return new Response(FAILED, {
      status: 400,
    });
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/logout`, {
    method: 'POST',
    headers: {
      AUTHORIZATION: `Bearer ${jwt}`,
    },
    cache: 'no-cache',
  });
  if (res.ok)
    return new Response(SUCCESS, {
      status: 200,
    });

  return new Response(FAILED, {
    status: 400,
  });
};
