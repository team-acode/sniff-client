import { AUTHORIZED } from '@/constants/statusCodes';

export const POST = async () => {
  return new Response(AUTHORIZED, {
    status: 200,
  });
};
