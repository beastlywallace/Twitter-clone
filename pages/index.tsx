import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import { Widgets } from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className='mx-auto max-h-screen lg:max-w-6xl'>
      <Head>
        <title>Twitter 3.0 by akpevwe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<main className="grid grid-cols-9">
      <Sidebar />
      <Feed />
        <Widgets />
        </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  
  return {
    props: {
    
  }
}
}
