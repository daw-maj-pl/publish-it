'use client';

import Post from '../../Post';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { motion } from 'framer-motion';
import AddComment from '../../AddComment';

type URL = {
  params: {
    slug: string;
  };
};

const fetchDetails = async (slug: string) => {
  const response = await axios.get(`/api/posts/${slug}`);
  return response.data;
};

export default function PostDetail(url: URL) {
  const { data, isLoading } = useQuery({
    queryKey: ['detail-post'],
    queryFn: () => fetchDetails(url.params.slug)
  });
  if (isLoading) return 'Loading.....';

  return (
    <div>
      <Post
        id={data?.id}
        name={data?.user.name}
        avatar={data?.user.image}
        postTitle={data?.title}
        comments={data?.comments}
      />
      <AddComment id={data?.id} />
      {data?.comments?.map(comment => (
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ ease: 'easeOut' }}
          key={comment.id}
          className="my-6 bg-white p-8 rounded-md"
        >
          <div className="flex items-center gap-2">
            <Image
              width={24}
              height={24}
              src={comment.user?.image}
              alt="avatar"
              className="rounded-full"
            />
            <h3 className="font-bold">{comment?.user?.name}</h3>
            <h2 className="text-sm">
              {new Date(comment.createdAt).toLocaleString()}
            </h2>
          </div>
          <div className="py-4">{comment.message}</div>
        </motion.div>
      ))}
    </div>
  );
}
