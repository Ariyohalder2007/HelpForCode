import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const Blog = () => {
  return (
    <div className={styles.container}>
    <main className={styles.main}>
   <div className="blogItem">
     <Link href={'/blogpost/learn-javascript'}>
       <a>
     <h2>How to Learn Javascript in 2022?</h2>
     </a>
     </Link>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus vel sunt fugit recusandae!</p>
     </div>

   <div className="blogItem">
     <Link href={'/blogpost/learn-javascript'}>
       <a>
     <h2>How to Learn Javascript in 2022?</h2>
     </a>
     </Link>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus vel sunt fugit recusandae!</p>
     </div>

   <div className="blogItem">
     <Link href={'/blogpost/learn-javascript'}>
       <a>
     <h2>How to Learn Javascript in 2022?</h2>
     </a>
     </Link>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus vel sunt fugit recusandae!</p>
     </div>

  </main>
  </div>
  )
}

export default Blog