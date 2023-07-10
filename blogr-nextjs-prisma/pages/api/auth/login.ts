import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(`Request method: ${req.method}`);

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { password } = req.body;

  // Hard-coded hashed password
  const HASHED_PASSWORD = '$2a$10$zJ2q1Pv6GqC7Y4Bv1vQy1Oxyg1oepDwKnmDLa88KAmLTmHTCpS3f2';

  console.log(`Submitted password: ${password}`);
  console.log(`Hashed password from env: ${HASHED_PASSWORD}`);

  if (bcrypt.compareSync(password, HASHED_PASSWORD)) {
    // Password is correct, issue a JWT
    const token = jwt.sign({ admin: true }, process.env.SECRET_KEY!, { expiresIn: '1h' });

    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: 'Invalid password' });
};

export default handler;
