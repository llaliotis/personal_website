import Head from 'next/head'
import React from 'react'
import Header from '../../components/Header'
import Test from '../../components/Test'
import Image from 'next/image'
import Footer from '../../components/Footer'


type Props = {}

function index({}: Props) {
  return (
    <div className='max-w-2xl mx-auto'>
      <Head>
        <title>Blog - laliotis</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

    <div className='max-w-2xl flex mx-auto items-center px-4 lg:px-8'>
 
            <Test />

        </div>

        <div className='mx-auto text-center py-16 max-w-2xl bgblog'>
              <h1 className='text-slate-100 font-semibold text-3xl text-start px-4 lg:px-8'>Posts</h1>

              <article className='my-7 mx-4 lg:mx-8 border border-[#292929] py-3 px-2 bg-[#202020] rounded-[12px]'>
              <a href="/blog/regulating-the-frontends-of-Decentralized-Exchanges">
                <Image src={'/Regulating the frontends of Decentralized Exchanges.png'} height={200} width={600} className='w-full object-cover rounded-[8px]' />
              <div className='items-center space-y-2'>
                <h2 className='text-slate-100 font-semibold text-xl text-left'>Regulating the frontends of Decentralized Exchanges</h2>
                <p className='text-slate-300 text-sm text-left'>2022-12-05</p>
                <p className='text-slate-300 text-sm text-left'>My answer: Enforce a quiz with some DEX-related questions for each wallet. If the wallet owner answers at least 3/5 of them, then give them a Soulbound token and let them interact with the protocol without any limitations. In some cases, maybe add another quiz with 2-3 questions about more complex actions like providing liquidity...</p>
              </div>
              </a>
              </article>
            
        </div>

        <Footer />

      </div>
  )
}

export default index

