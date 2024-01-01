import { redirect } from 'next/navigation';

interface RedirectPageProps {
  params: { provider: string };
  searchParams: { code: string };
}

const page = async ({ params, searchParams }: RedirectPageProps) => {
  if (!searchParams || !searchParams.code) redirect('/login');

  const res = await fetch(
    `${process.env.SERVER_URL}/login?code=${searchParams.code}&provider=${params.provider}`,
    { method: 'POST' },
  );
  if (res.ok) {
    const userInfo = await res.json();
    console.log(userInfo);

    redirect('/');
  } else {
    redirect('/login');
  }
};

export default page;
