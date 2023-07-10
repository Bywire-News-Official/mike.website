import prisma from '../../../lib/prisma';  // Update this import path according to your project structure
import jwt from 'jsonwebtoken';

export default async function handle(req, res) {
  // Extract the token from the 'Authorization' header
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    // If there's no token, return an error message
    return res.status(401).json({ error: 'Not authorized' });
  }

  try {
    // Verify the token
    jwt.verify(token, process.env.SECRET_KEY);

    // If the token is valid, find all draft posts
    const drafts = await prisma.post.findMany({
      where: {
        published: false,
      },
      include: {
        author: {
          select: { name: true },
        },
      },
    });

    // Return the drafts
    return res.status(200).json(drafts);
  } catch (error) {
    // If an error occurs (e.g., the token is invalid or expired), return an error message
    return res.status(401).json({ error: 'Not authorized' });
  }
};