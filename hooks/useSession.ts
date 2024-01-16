import { TUserInfo } from '@/types';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useSession = () => {
  const [userInfo, setUserInfo] = useState<TUserInfo | null | undefined>(
    undefined,
  );
  const pathName = usePathname();
  const router = useRouter();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/session', { cache: 'no-cache' });
        if (res.ok) {
          const stored = await res.json();
          setUserInfo(stored);
        } else throw new Error();
      } catch {
        router.push('/login');
      }
    })();
  }, [pathName, router]);

  return userInfo;
};
