import Head from 'next/head'
import styles from '../styles/Home.module.css'

import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Formspree-DEMO</title>
        <meta name="description" content="Formspree Demo for POC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}> 
      <ContactForm />
      </main>
    </div>
  )
}
