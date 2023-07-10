import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';
import jwt from 'jsonwebtoken';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const postId = req.query.id;
  const { publish } = req.body;
  
  const token = req.headers.authorization?.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY!);

    if (decoded) {
        const post = await prisma.post.update({
            where: { id: String(postId) },
            data: { published: publish },
          });

      return res.json(post);
    }

    return res.status(403).json({ error: 'Unauthorized' });
  } catch (err) {
    console.error('Fetching drafts error: ', err);
    return res.status(500).json({ error: 'Error fetching drafts' });
  }
}