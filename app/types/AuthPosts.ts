export type AuthPosts = {
  id: string;
  email: string;
  image: string;
  name: string;
  posts: {
    createdAt: string;
    id: string;
    title: string;
    comments?: {
      createdAt: string;
      id: string;
      postId: string;
      title: string;
      userId: string;
    }[];
  }[];
};
