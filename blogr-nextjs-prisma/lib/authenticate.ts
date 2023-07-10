import { NextApiRequest, NextApiResponse } from 'next';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface NextApiRequestExtended extends NextApiRequest {
  user: JwtPayload | string;
}

const authenticate = (handler: (req: NextApiRequestExtended, res: NextApiResponse) => Promise<void>) => 
  async (req: NextApiRequestExtended, res: NextApiResponse) => {
    try {
      const token = req.headers.authorization!.split(' ')[1];
      const decoded = jwt.verify(token, process.env.SECRET_KEY!);

      req.user = decoded;
      await handler(req, res);
    } catch (error) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
  };

export default authenticate;
