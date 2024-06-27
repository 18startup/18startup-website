import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from "./page.module.css";

// React Icons
import { IoArrowBack } from "react-icons/io5";

// Actions
import { getABlogBySlug } from '@/actions/blogs';

// Assets
import dummyblog from "../../../../public/assets/dummyblog.jpg";

// Utils
import SadIcon from '@/utils/Icons';
import wordsPerMinute from '@/utils/wordsPerPinute';

export async function generateMetadata({params}: {params: {blogpost: string}}) {

  const blogDetails = await getABlogBySlug(params.blogpost);

  return {
    title: blogDetails.title ? blogDetails.title + " | Blogs" : 'Blogs | 18startup',
    description: blogDetails.overview ? blogDetails.overview : '18startup blogs equips founders with the knowledge and execution capabilities to build a startup.',
    keywords: blogDetails.tags
  }
}

const BlogPost = async ({params}: {params: {blogpost: string}}) => {

  const blogDetails = await getABlogBySlug(params.blogpost);

  if (!params || !blogDetails) {
    return (
      <div className={styles.empty__center}>
        <SadIcon/>
        <h1>Empty <span>Blog!</span></h1>
        <p>Our team is working to bring blog posts which are knowledgeble and helps to build a strong startup.</p>
      </div>
    )
  }

  return (
    <article className={styles.blog__post}>

      <div className={styles.blog__head}>
        <Link href="/blogs" title='Back to Blogs'><IoArrowBack fontSize={18} /><span>All Blogs</span></Link>
        <h1>{blogDetails.title}</h1>
        <div className={styles.blog__details}>
          <div className={styles.more__details}>
            <p>Written by <span>{blogDetails.authorName ? blogDetails.authorName : '18startup'}</span></p>
            <p>Approx {wordsPerMinute(blogDetails.description)} Min Read</p>
          </div>
          <p>Published on <span>{new Date(blogDetails.updatedAt ? blogDetails.updatedAt : '0').toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: '2-digit', timeZone: 'IST'})}</span></p>
        </div>
      </div>

      <div className={styles.blog__desc}>
        <Image src={blogDetails.coverImage ? blogDetails.coverImage : dummyblog} alt={blogDetails.title} width={700} height={520} />
        <div className={styles.main__desc} dangerouslySetInnerHTML={{ __html: blogDetails.description ? blogDetails.description.replaceAll('<p><br></p>', '') : '<p>No description!</p>' }}></div>
      </div>

    </article>
  )
}

export default BlogPost;