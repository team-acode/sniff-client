'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface RedirectPageProps {
  params: { provider: string };
  searchParams: { jwtAccessToken: string; init: boolean };
}

const RedirectPage = ({ params, searchParams }: RedirectPageProps) => {
  const router = useRouter();
  const { provider } = params;
  const jwt = searchParams.jwtAccessToken;
  const isInit = searchParams.init;

  if (!provider && !jwt) router.push('/login');

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({
          jwt,
          provider,
        }),
      });
      if (res.ok) {
        if (isInit) router.push('/mypage/username?init=true');
        else router.push('/');
      } else {
        router.push('/login');
      }
    })();
  }, [isInit, jwt, provider, router]);
};

export default RedirectPage;
