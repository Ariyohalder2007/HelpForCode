import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Help For Code</title>
        <meta name="description" content="A blog for coders by coders" />
        <meta name='keyword' content='codding help, help for code, help with code, code help, CodeHelp' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.mainnav}>
          <ul>
            <Link href='/'>

            <a>
            <li>
            Home</li></a>
            </Link>
            <Link href='/about'><a><li>About</li></a></Link>
            <Link href='/blog'><a><li>Blog</li></a></Link>
            <Link href='/contact'><a><li>Contact</li></a></Link>
          </ul>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Help For Code! 🥰
        </h1>

        <p className={styles.description}>
         Help for coders by
          <code className={styles.code}>coders</code>💻
        </p>

        <div className="blogs">
          <h2>Popular Blogs</h2>
         <div className="blogItem">
           <h1>How to Learn Javascript in 2022?</h1>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus vel sunt fugit recusandae!</p>
           </div>
         <div className="blogItem">
           <h1>How to Learn Javascript in 2022?</h1>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus vel sunt fugit recusandae!</p>
           </div>
         <div className="blogItem">
           <h1>How to Learn Javascript in 2022?</h1>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus vel sunt fugit recusandae!</p>
           </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
