'use client';

// import { headers } from 'next/headers';
// import { redirect } from 'next/navigation';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface RedirectPageProps {
  params: { provider: string };
  searchParams: { code: string };
}

const RedirectPage = ({ params, searchParams }: RedirectPageProps) => {
  const router = useRouter();
  const { provider } = params;
  const { code } = searchParams;
  if (!provider && !code) router.push('/login');

  // // const jwt = searchParams.jwtAccessToken;
  // // const isInit = searchParams.init === 'true';
  // const host = headers().get('host');
  // const protocal = process?.env.NODE_ENV === 'development' ? 'http' : 'https';

  // const res = await fetch(`${protocal}://${host}/api/login`, {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     code,
  //     provider,
  //   }),
  // });

  // if (res.ok) {
  //   if (res.status === 201) {
  //     redirect('/mypage/username?init=true');
  //   } else redirect('/');
  // }

  // redirect('/login');

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({
          code,
          provider,
        }),
      });
      if (res.ok) {
        if (res.status === 201) {
          router.push('/mypage/username?init=true');
        } else router.push('/');
      } else {
        router.push('/login');
      }
    })();
  }, [code, provider, router]);
};

export default RedirectPage;
