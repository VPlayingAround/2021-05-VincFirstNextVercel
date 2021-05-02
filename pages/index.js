import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>vinc test en speelt met next en deployt met vercel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Zomg vinc speelt met <a href="https://nextjs.org">Next.js</a> live op
          vercel!
        </h1>

        <p className={styles.description}>
          beschrijvinkje txtje is wat langere zin
        </p>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h3>Titeltje</h3>
            <p>bla</p>
          </a>

          <a href="/" className={styles.card}>
            <h3>Tweede Kopje?!</h3>
            <p>bla</p>
          </a>

          <a href="/" className={styles.card}>
            <h3>Waarom geen derde</h3>
            <p>bla</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>Copyright 2021 je boy</footer>
    </div>
  )
}
