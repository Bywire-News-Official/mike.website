import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import prisma from '../../../../lib/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { title, content } = req.body;
  const token = req.headers.authorization?.split(' ')[1]; // Get the token from the Authorization header

  console.log("Received token: ", token); // Log the received token

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.SECRET_KEY!);

    console.log("Decoded token: ", decoded); // Log the decoded token

    // Create the post
    const post = await prisma.post.create({
      data: {
        title: title,
        content: content,
        author: { connect: { id: decoded.userId } }, // Connect the post to the author represented by JWT token
      },
    });

    return res.status(200).json(post);
  } catch (err) {
    // If the creation fails, log the error and return an error message
    console.log('Error occurred:', err);
    console.error(err);  // <-- add this line to log the full error details
    return res.status(500).json({ error: 'An error occurred while creating the post.' });
  }
}