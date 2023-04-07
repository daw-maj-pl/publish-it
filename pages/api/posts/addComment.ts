import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import prisma from '../../../prisma/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      return res
        .status(401)
        .json({ message: 'Please sign in to post a comment.' });
    }

    const { title, postId }: { title: string; postId: string } = req.body.data;
    if (!title.length) {
      return res.status(401).json({ message: 'Please enter some text' });
    }

    try {
      const prismaUser = await prisma.user.findUnique({
        where: { email: session.user?.email! }
      });

      const result = await prisma.comment.create({
        data: {
          message: title,
          userId: prismaUser?.id!,
          postId: postId
        }
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(403).json({ err: 'Error has occurred while making a post' });
    }
  }
}
