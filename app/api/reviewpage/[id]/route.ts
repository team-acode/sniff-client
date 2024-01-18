import { getSession } from "@/utils/auth";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const userInfo = getSession();

  if (!userInfo) {
    return new Response(JSON.stringify({ message: 'Unauthorized' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const id = params.id;
  try {
    const body = await req.json();
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/review/${id}`, 
    {
      headers: {
        'Content-Type': 'application/json',
        AUTHORIZATION: `Bearer ${userInfo.jwt}`,
      },
      method: 'POST',
      body: JSON.stringify(body.payload),

    });
    if (!res.ok) {
      throw new Error(`Server responded with an error: ${res.status}`);
    }
    return new Response(JSON.stringify({payload: body.payload}), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    return new Response(JSON.stringify({ message: 'An error occurred' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}



