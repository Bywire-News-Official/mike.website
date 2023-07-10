import { NextApiRequest, NextApiResponse } from 'next';
import authenticate from '../../../lib/authenticate';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // If the request gets here, the user is authenticated
  res.json({ message: 'Hello, authenticated user!' });
};

export default authenticate(handler);
