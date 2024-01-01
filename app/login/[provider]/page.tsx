'use client';

import { USERNAME_SETTING_REQUIRED } from '@/constants/statusCodes';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface RedirectPageProps {
  params: { provider: string };
  searchParams: { code: string };
}

const RedirectPage = ({ params, searchParams }: RedirectPageProps) => {
  const router = useRouter();
  if (!searchParams || !searchParams.code || !params.provider)
    router.push('/login');
  useEffect(() => {
    (async () => {
      const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({
          code: searchParams.code,
          provider: params.provider,
        }),
      });

      if (res.ok) {
        if (res.statusText === USERNAME_SETTING_REQUIRED)
          router.push('/mypage/username');
        else router.push('/');
      } else {
        router.push('/login');
      }
    })();
  }, [params.provider, router, searchParams.code]);
};

export default RedirectPage;
