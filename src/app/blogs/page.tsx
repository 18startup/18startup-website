import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import styles from "./page.module.css";

// Assets
import dummyBlog from "../../../public/assets/dummyblog.jpg";

// Components
import AllBlogs from './ui/Blogs/Blogs';

// Actions
import { getAllBlogs } from '@/actions/blogs';

// Types
import { BlogType } from '@/types';

// Icons
import SadIcon from '@/utils/Icons';

export const metadata: Metadata = {
  title: "Blogs | 18startup",
  description: "18startup blogs equips founders with the knowledge and execution capabilities to build a startup.",
};

const Blogs = async () => {

  const allBlogs = await getAllBlogs();

  if (allBlogs.length === 0) {
    return (
      <div className={styles.empty__center}>
        <SadIcon/>
        <h1>No Recent <span>Blogs!</span></h1>
        <p>Our team is working to bring blog posts which are knowledgeble and helps to build a strong startup.</p>
      </div>
    )
  }

  return (
    <div className={styles.blogs__center}>

      {/* Section 1 - Main Blog Post & Recent Posts */}

      <section className={styles.recent__blogs}>

        <div className={styles.main__blog}>
          <h1><span>Discover our</span> latest blogs</h1>
          <Link href={`/blogs/${allBlogs[0].slug}`} className={styles.top__blog}>
            <Image src={allBlogs[0].coverImage ? allBlogs[0].coverImage : dummyBlog} alt="Blog Post" width={540} height={320} />
            <div className={styles.blog__details}>
              <h3>{allBlogs[0].title}</h3>
              <p>{allBlogs[0].overview ? allBlogs[0].overview : 'No overview...'}</p>
            </div>
          </Link>
        </div>

        <div className={styles.recent}>
          <h2>Recent Blogs</h2>
          <div className={styles.most__recent}>
            {
              allBlogs.length <= 1 ? (
                <div className={styles.no__recent}>
                  <SadIcon/>
                  <h1>No Recent <span>Blogs!</span></h1>
                  <p>Our team is working to bring blog posts which are knowledgeble and helps to build a strong startup.</p>
                </div>
              ) : (
                allBlogs.slice(1,5).map((blog) => {
                  return (
                    <Link href={`/blogs/${blog.slug}`} className={styles.recent__blog} key={blog._id}>
                      <p>{blog.authorName ? blog.authorName : '18startup'}</p>
                      <h4>{blog.title}</h4>
                      <p>{blog.overview ? blog.overview : 'No overview...'}</p>
                    </Link>
                  )
                })
              )
            }
          </div>
        </div>

      </section>

      {/* Section 1 - Main Blog Post & Recent Posts */}

      {/* Section 2 - All Blog Posts */}

      {
        allBlogs.length > 1 && (
          <section className={styles.all__blogs}>
            <AllBlogs allBlogs={allBlogs} />
          </section>
        )
      }

      {/* Section 2 - All Blog Posts */}

    </div>
  )
}

export default Blogs;