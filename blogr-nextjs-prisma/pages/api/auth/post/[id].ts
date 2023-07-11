import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';
import jwt from 'jsonwebtoken';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const postId = req.query.id;
  const { title, content, published } = req.body;

  // Retrieve token and decode userId
  const token = req.headers.authorization?.split(' ')[1];
  let decodedToken;
  
  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(403).json({ error: "Invalid token." });
  } 

  const userId = (decodedToken as any).id;
  
  switch(req.method) {
    case 'PUT':
      try {
        const post = await prisma.post.update({
          where: { id: String(postId) },
          data: { title, content },
        });
        return res.json(post);

      } catch (error) {
        console.error("Error updating post: ", error);
        res.status(500).json({ error: "Unable to update the post" });
      }

      break;

    case 'PATCH':
      try {
        const post = await prisma.post.update({
          where: { id: String(postId) },
          data: { published },
        });
        return res.json(post);

      } catch (error) {
        console.error("Error updating post: ", error);
        res.status(500).json({ error: "Unable to update the published status" });
      }

      break;

    default:
      res.status(405).json({ message: 'Method not allowed' });
  }
}