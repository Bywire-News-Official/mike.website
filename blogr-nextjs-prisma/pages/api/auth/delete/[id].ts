import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';
import jwt from 'jsonwebtoken';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const postId = req.query.id;
  
  const token = req.headers.authorization?.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY!);

    if (decoded) {
      const post = await prisma.post.delete({
        where: { id: String(postId) }
      });

      return res.json({ message: 'Post deleted successfully' });
    }

    return res.status(403).json({ error: 'Unauthorized' });
  } catch (err) {
    console.error('Deleting post error: ', err);
    return res.status(500).json({ error: 'Error deleting post' });
  }
}