import type { NextPage } from 'next'
import Head from 'next/head'
import { Feed } from '../components/feed'
import { Sidebar } from '../components/sidebar'
import { Widgets } from '../components/widget'


const Home: NextPage = () => {
  return (
    <div className='lg:max-w-7xl mx-auto max-h-screen overflow-hidden'>
      <Head>
        <title>Twitter 2.0</title>
      </Head>

      <main className='grid grid-cols-9'>

        {/* sidebar */}
        <Sidebar />
        {/* feed */}
        <Feed />

        {/* widgets */}
        <Widgets />
      </main>
    </div>
  )
}

export default Home
