import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TableList from '../components/tableList'
import TableShort from '../components/tableShort'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Prueba Table App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <TableList/>
        <TableShort/>   
      </div>
    </div>
  )
}

export default Home
