import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import prisma from '../../../../lib/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers.authorization?.split(' ')[1]; // Get the token from the Authorization header

  if(!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (req.method === 'POST') {
    const { title, content, image, slug, seo } = req.body; // Extract slug from the request body

    let seoData;

    if (seo) {
      try {
        if (seo.id) {
          seoData = await prisma.sEO.update({
            where: { id: seo.id },
            data: { ...seo },
          });
        } else {
          seoData = await prisma.sEO.create({ data: { ...seo } });
        }
      } catch (error){
        console.log(error);
        return res.status(500).json({ error: 'An error occurred while updating SEO data.' });
      }
    }

    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY!);
      const post = await prisma.post.create({
        data: {
          title,
          content,
          image,
          slug, // Include slug here
          seo: seoData ? { connect: { id: seoData.id } } : undefined,
          author: { connect: { id: decoded.userId } },
        },
      });

      return res.status(200).json(post);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'An error occurred while creating the post.' });
    }

  } else if (req.method === 'PUT') {
    const { id, title, content, image, slug, seo } = req.body; // Extract slug from the request body

    let seoData;

    if (seo) {
      try {
        if (seo.id) {
          seoData = await prisma.sEO.update({
            where: { id: seo.id },
            data: { ...seo },
          });
        } else {
          seoData = await prisma.sEO.create({ data: { ...seo } });
        }
      } catch (error){
        console.log(error);
        return res.status(500).json({ error: 'An error occurred while updating SEO data.' });
      }
    }

    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY!);
      const post = await prisma.post.update({
        where: { id },
        data: {
          title,
          content,
          image,
          slug, // Include slug here
          seo: seoData ? { connect: { id: seoData.id } } : undefined,
          author: { connect: { id: decoded.userId } },
        },
      });

      return res.status(200).json(post);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'An error occurred while updating the post.' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
