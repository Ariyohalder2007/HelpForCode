import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <div className={styles.container}>


      <Head>
        <title>Help For Code</title>
        <meta name="description" content="A blog for coders by coders" />
        <meta name='keyword' content='codding help, help for code, help with code, code help, CodeHelp' />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <h1 className={styles.title}>
        Help For Code! 🥰
        </h1>

        <p className={styles.description}>
          <span className='mspan'>
         Help for coders by
         </span>
          <code className={styles.code}>coders</code>💻
        </p>

        <Image src='/homeImg.jpg' alt='home image' width={388} height={258} className={styles.myImg}/>

        {/* <div className="blogs">
          <h1>Popular Blogs</h1>
         <div className="blogItem">
           <h2>How to Learn Javascript in 2022?</h2>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus vel sunt fugit recusandae!</p>
           </div>
         <div className="blogItem">
           <h2>How to Learn Javascript in 2022?</h2>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus vel sunt fugit recusandae!</p>
           </div>
         <div className="blogItem">
           <h2>How to Learn Javascript in 2022?</h2>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus vel sunt fugit recusandae!</p>
           </div>
        </div> */}
      </main>


    </div>
  )
}
