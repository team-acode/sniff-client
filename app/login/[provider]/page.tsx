import { USERNAME_SETTING_REQUIRED } from '@/constants/statusCodes';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

interface RedirectPageProps {
  params: { provider: string };
  searchParams: { code: string };
}

const page = async ({ params, searchParams }: RedirectPageProps) => {
  if (!searchParams || !searchParams.code || !params.provider)
    redirect('/login');

  const host = headers().get('host');
  const protocal = process?.env.NODE_ENV === 'development' ? 'http' : 'https';
  const res = await fetch(`${protocal}://${host}/api/login`, {
    method: 'POST',
    body: JSON.stringify({
      code: searchParams.code,
      provider: params.provider,
    }),
  });

  if (res.ok) {
    if (res.statusText === USERNAME_SETTING_REQUIRED)
      redirect('/mypage/username');
    redirect('/');
  } else {
    redirect('/login');
  }
};

export default page;
