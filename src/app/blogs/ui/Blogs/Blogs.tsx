import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "./Blogs.module.css";

// Assets
import dummyBlog from "../../../../../public/assets/dummyblog.jpg";

// Types
import { BlogType } from '@/types';

const AllBlogs = ({allBlogs}: {allBlogs: BlogType[]}) => {
  return (
    <section className={styles.blogs__main}>
        <h2>More from <span>18startup</span></h2>
        <div className={`${allBlogs.length < 3 ? styles.blogs__few : styles.blogs}`}>
            {
                allBlogs.slice(1,).map((blog) => {
                    return (
                        <Link href={`/blogs/${blog.slug}`} className={styles.blog__card} key={blog._id}>
                            <Image src={blog.coverImage ? blog.coverImage : dummyBlog} alt={blog.title} width={300} height={220} />
                            <div className={styles.blog__details}>
                                <p>{blog.authorName ? blog.authorName : '18startup'}</p>
                                <h4>{blog.title}</h4>
                            </div>
                        </Link>
                    )
                })
            }
        </div>

        {/* Pagination Pending */}

    </section>
  )
}

export default AllBlogs;