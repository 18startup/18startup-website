import React from 'react'
import styles from "./skeleton.module.css";

const AllBlogsSkeleton = () => {
  return (
    <main className={styles.all__blogs}>
        <div className={styles.top__blogs}></div>
        <div className={styles.top__blogs}></div>
    </main>
  )
}

export default AllBlogsSkeleton;