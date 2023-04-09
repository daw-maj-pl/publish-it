export type PostType = {
  id: string;
  title: string;
  createdAt: string;
  user: {
    image: string;
    name: string;
  };
  comments: {
    id: string;
    createdAt: string;
    postId: string;
    userId: string;
    message: string;
    user: {
      image: string;
      name: string;
    };
  }[];
};
