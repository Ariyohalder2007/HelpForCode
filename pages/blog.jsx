import React, {useEffect, useState} from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(()=>{
    // console.log('Use effect is running');
    fetch('http://localhost:3000/api/blogs').then((a)=>{
     return a.json();
    }).then((data)=>{
      console.log(data);
      setBlogs(data)
    })
  }, [])
  return (
    <div className={styles.container}>
    <main className={styles.main}>


     {blogs.map((blogItem)=>{
       return <div key={blogItem.slug}>
           <Link href={'/blogpost/'+blogItem.slug}>
       <a>
     <h2>{blogItem.title}</h2>
     </a>
     </Link>
     <p>{blogItem.metadesc}</p>
       </div>
     })}

  </main>
  </div>
  )
}

export default Blog