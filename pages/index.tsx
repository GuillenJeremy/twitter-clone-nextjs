import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import { Feed } from '../components/feed'
import { Sidebar } from '../components/sidebar'
import { Widgets } from '../components/widget'
import { Tweet } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'

TimeAgo.addDefaultLocale(en)

interface Props {
  tweets: Tweet[];
};

const Home = ({tweets}: Props) => {
  console.log(tweets)
  return (
    <div className='lg:max-w-7xl mx-auto max-h-screen overflow-hidden'>
      <Head>
        <title>Twitter 2.0</title>
      </Head>

      <main className='grid grid-cols-9'>

        {/* sidebar */}
        <Sidebar />
        {/* feed */}
        <Feed tweets={tweets}/>

        {/* widgets */}
        <Widgets />
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();
  return {
    props: {
      tweets
    }
  };
}
