import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import Link from 'next/link'
import { About } from '../components/About'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col justify-center h-screen min-h-screen bg-gradient-to-r from-black-200 to-blue-300'>
      <Head>
        <title>✧unun.about</title>
        <meta name="description" content="✧unun." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <main className="flex flex-col m-[10%] md:m-[25%]">        
        <h1 className="text-4xl mb-3 drop-shadow-hard">
          {'✧unun.'}
        </h1>

        <About />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Home
