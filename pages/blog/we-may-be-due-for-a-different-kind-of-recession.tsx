import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header'
import Image from 'next/image'
import BackToBlogBtn from '../../components/BackToBlogBtn'
import Footer from '../../components/Footer'

type Props = {}

function we_may_be_due_for_a_different_kind_of_recession({}: Props) {
  return (
    <div className='max-w-2xl mx-auto'>
    <Head>
      <title>We may be due for a different kind of recession - Blog</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="We may be due for a different kind of recession - Blog"/>
            <meta property="og:description" content="Eleftherios Laliotis' Blog"/>
            <meta property="og:type" content="article"/>
            <meta property="og:url" content="https://laliotis.me/blog/we-may-be-due-for-a-different-kind-of-recession"/>
            <meta property="og:image" content="https://laliotis.me/Recession_cover_image.png"/>
            <meta name="twitter :site" content="@greekdubliner" />
            <meta name= "twitter:creator" content="@greekdubliner"/>
            <meta property="og:url" content=" https://laliotis.me/blog/we-may-be-due-for-a-different-kind-of-recession"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:image:alt" content="A graph with unemployment rate and inflation."/>
            <meta name="twitter:title" content="We may be due for a different kind of recession - Blog"/>
            <meta name="twitter:description" content="Eleftherio Laliotis' Blog"/>
            <meta name="twitter:image" content="https://laliotis.me/Recession_cover_image.png"/>
    </Head>

    <Header />

    <div className='max-w-2xl flex mx-auto items-center px-4 lg:px-8'>

          <BackToBlogBtn />

    </div>

      <article className='mx-auto text-center py-16 max-w-2xl'>
            <h1 className='text-slate-100 font-semibold text-3xl text-start px-4 lg:px-8 my-2'>We may be due for a different kind of recession</h1>
            <p className='text-slate-300 text-sm text-left px-4 lg:px-8 mb-2'>2022-09-26</p>
            <p className='text-slate-300/80 italic text-sm text-left px-4 lg:px-8 mb-6'>Disclaimer: These are my current thoughts, and they are subject to change in the future.</p>
            <Image src={'/Recession_cover_image.png'} height={300} width={600} className='w-full object-cover rounded-[8px]' alt="A graph with unemployment rate and inflation." />

            <p className='text-slate-300 text-left px-4 lg:px-8 mt-6'>
            While recessions are never welcome, they are a fact of life in the business cycle. And although they can be painful, they don’t always last forever. In fact, we may be about to see a different type of recession — one that is caused by high inflation and low unemployment. This so-called “ reversal recession” could actually be good news for the economy, as it would likely lead to higher wages and more jobs. So while no one wants to see a recession, it’s important to remember that not all recessions are created equal.
            </p>

            <p className='text-slate-300 text-left px-4 lg:px-8 mt-6'>
            We may be due for a recession that is characterized by high inflation instead of low unemployment. And, while that may sound bad, it could actually be not the worst news for the economy. You see, when people are employed, they tend to spend money. But when inflation starts to creep up, people start to get nervous and save their money instead, which can lead to a recession.
            </p>

            <p className='text-slate-300 text-left px-4 lg:px-8 mt-6'>
            However, if people feel confident about their job prospects and don’t feel the need to save their money, they’re more likely to spend, which can help boost the economy. So, while it’s admittedly a bit scary to think about, a recession caused by inflation might not be all bad news.
            </p>


            <p className='text-slate-300 text-left px-4 lg:px-8 mt-6'>
            I would love to hear your thoughts. As I said, these are my current ideas and are subject to change. You can find me on <a href="https://twitter.com/greekdubliner" target='_blank' className='text-emerald-300 hover:text-emerald-500 underline'>Twitter</a>, <a href="https://www.linkedin.com/in/eleftherios-laliotis/" target='_blank' className='text-emerald-300 hover:text-emerald-500 underline'>LinkedIn</a>, and <a href="https://fcast.me/ll" target='_blank' className='text-emerald-300 hover:text-emerald-500 underline'>Farcaster</a>.
            </p>

          
      </article>

      <Footer />

    </div>
)
}

export default we_may_be_due_for_a_different_kind_of_recession