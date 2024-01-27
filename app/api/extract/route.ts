export async function POST(req: Request)  {

  try {
    const body = await req.json();
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/extract`, 
    {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body.payload),

    });
    if (!res.ok) {
      throw new Error(`Server responded with an error: ${res.status}`);
    }
    const serverResponse = await res.json();
    return new Response(JSON.stringify(serverResponse), {
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



