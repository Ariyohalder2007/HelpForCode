import React from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/BlogPost.module.css'

const Slug = () => {
    const router = useRouter()
    const {slug} = router.query
  return (
   <div className={styles.container}>
     <main className={styles.main}>
     <h1>Title - {slug}</h1>
     <hr />
     <p>
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem natus adipisci perferendis aliquam quisquam voluptates accusamus repudiandae excepturi, porro dicta totam delectus consequatur ex, architecto earum iusto sapiente dolorem! Vero commodi temporibus obcaecati ducimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, vel aliquid dolor veritatis sed ex tempore! Porro possimus tenetur, ipsum facilis amet ullam nemo culpa asperiores accusamus voluptatem a nobis optio ipsam, ad officiis distinctio repellat dignissimos. Quos possimus et cumque a. Inventore dolorem ratione obcaecati reprehenderit sapiente explicabo similique odit unde itaque placeat, aut harum, velit commodi sequi nemo consectetur omnis, quibusdam hic. Iure iste ab omnis nihil, sint asperiores saepe hic non incidunt accusamus autem. Sit hic accusantium, harum ut aperiam, corrupti iure ab quaerat nisi officia at neque dicta tempora recusandae eum aliquid ipsam, est sapiente. Facere.
     </p>
     </main>
   </div>
  )
}

export default Slug