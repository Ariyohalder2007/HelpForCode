import React,{useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/BlogPost.module.css'

const Slug = () => {
  const [blog, setblog] = useState([])
  const router = useRouter()
  useEffect(() => {
    if (!router.isReady) {
      return;
    }
      const {slug} =  router.query
      fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
     return a.json();
    }).then((data)=>{
      console.log(data);
      setblog(data)
    })

    },[router.isReady])

  return (
   <div className={styles.container}>
     <main className={styles.main}>
     <h1>{blog && blog.title}</h1>
     <span>{blog && blog.author}</span>
     <hr />
     <p>
       {blog && blog.content}
     </p>
     </main>
   </div>
  )
}

export default Slug