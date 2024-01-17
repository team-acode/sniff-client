import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookieStore = cookies();
  const jwt = cookieStore.get('jwt')?.value;
  const exp = Number(cookieStore.get('exp')?.value);

  if (!jwt || !exp) {
    return NextResponse.json(null);
  }

  if (exp < new Date().getTime()) {
    cookieStore.delete('jwt');
    cookieStore.delete('exp');
    cookieStore.delete('nickname');
    return NextResponse.json(null);
  }
  return NextResponse.json({ jwt, exp });
}
