'use server';

import { BlogType } from "@/types";

export const getAllBlogs =  async () => {
    try {
        
        const response = await fetch(`${process.env.SERVER_HOST_URL}/api/v1/blogs`, {
            method: 'GET',
            cache: 'no-cache'   
        });

        const blogsData = await response.json();

        if (!response.ok) {
            console.log(blogsData);
            throw new Error('Issue fetching blogs... Try agin!');
        }

        const { blogs }: {blogs: BlogType[]} = blogsData;
        return blogs;

    } catch (error) {
        console.log(error);
        throw new Error('Internal Server Error!');
    }
}

export const getABlogBySlug = async (slugName: string) => {
    try {
        const response = await fetch(`${process.env.SERVER_HOST_URL}/api/v1/blogs/${slugName}`, {
            method: 'GET',
            cache: 'no-store'
        });

        const blogData = await response.json();

        if (!response.ok) {
            console.log(blogData);
            throw new Error('Issue fetching blog... Try again!');
        }

        const { blog }: {blog: BlogType} = blogData;
        return blog;

    } catch (error) {
        console.log(error);
        throw new Error('Internal Server Error!');
    }
}