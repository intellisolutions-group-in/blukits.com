export type BlogAuthor = {
  name: string;
  designation: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: BlogAuthor;
  publishDate: string;
  readTime: string;
  image: string;
};
