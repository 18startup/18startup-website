import { StaticImageData } from "next/image";

export type CommunityEventType = {
  id: number;
  title: string;
  blurImg?: string;
  description: string;
  img: StaticImageData;
};

export type BlogType = {
  _id: string;
  coverImage: string;
  title: string;
  overview: string;
  authorName: string;
  tags: string[];
  description: string;
  slug: string;
  updatedAt: string;
};