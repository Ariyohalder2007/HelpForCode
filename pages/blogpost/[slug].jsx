import React,{ useState} from 'react'
import styles from '../../styles/BlogPost.module.css'

const Slug = (props) => {
  const [blog, setblog] = useState(props.blog)


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

export async function getServerSideProps(context) {
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${context.query.slug}`);
  let blog = await data.json();
  return {
    props: {blog}, // will be passed to the page component as props
  }
}
export default Slug