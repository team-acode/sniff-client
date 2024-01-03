import { AUTHORIZED } from '@/constants/statusCodes';

export const POST = async (request: Request) => {
  return new Response(AUTHORIZED, {
    status: 200,
  });
};
