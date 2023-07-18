import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(`Request method: ${req.method}`);

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  // Here you would look up the user in your database using the provided email then compare the hashed password
  // Assume we find user from DB and we have a user object like this
  const user = {
    id: '2',
    email: 'michael@bywire.news', 
    password: '$2a$10$zJ2q1Pv6GqC7Y4Bv1vQy1Oxyg1oepDwKnmDLa88KAmLTmHTCpS3f2' // Hashed Password
  }


  if (bcrypt.compareSync(password, user.password)) {
    // Password is correct, issue a JWT
    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.SECRET_KEY!, { expiresIn: '1h' });

    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: 'Invalid password' });
};

export default handler;