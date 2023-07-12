import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import prisma from '../../../../lib/prisma';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postId = req.query.id;
  const { title, content, image, seo } = req.body;

  // Retrieve token and decode userId
  const token = req.headers.authorization?.split(" ")[1];
  let decodedToken;
  
  try {
    decodedToken = jwt.verify(token, process.env.SECRET_KEY);
  } catch (error) {
    return res.status(403).json({ error: "Invalid token." });
  }
  
  const userId = (decodedToken as any).userId;

  switch (req.method) {
    case "PUT":
        try {
            const updatedPost = await prisma.post.update({
              where: { id: String(postId) },
              data: { title, content, image },
            });
          
            let postWithSEO: any = updatedPost;
          
            if (updatedPost && seo) {
              const updatedSEO = await prisma.sEO.update({
                where: { id: updatedPost.seoId },
                data: { ...seo },
              });
          
              postWithSEO.seo = updatedSEO;
            }
          
            if (postWithSEO) {
              return res.json(postWithSEO);
            } else {
              res.status(500).json({
                error: `An error occurred: Could not find post with id: ${postId}`,
              });
            }
          } catch (error) {
            res.status(500).json({
              error: `An error occurred: ${error.message}`,
              stack: error.stack,
            });
          }
      break;

    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }
}