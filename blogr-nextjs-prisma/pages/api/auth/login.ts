import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Replace 'your-password' with your actual password
const hashedPassword = bcrypt.hashSync('Y5C-qK[dcByN"L<^rv2;3Qzk', 10);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { password } = req.body;

  if (bcrypt.compareSync(password, hashedPassword)) {
    // Password is correct, issue a JWT
    const token = jwt.sign({ admin: true }, process.env.SECRET_KEY!, { expiresIn: '1h' });

    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: 'Invalid password' });
};

export default handler;
