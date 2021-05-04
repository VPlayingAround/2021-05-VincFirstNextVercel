import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function About() {
  state = {
    count: 0,
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>vinc test en speelt met next en deployt met vercel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>About</h1>

        <p className={styles.description}>Deze pagina weet wassup.</p>
        <span>{this.state.count}</span>
        <button>++!</button>
      </main>
    </div>
  )
}
