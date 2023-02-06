import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header'
import Image from 'next/image'
import BackToBlogBtn from '../../components/BackToBlogBtn'
import Footer from '../../components/Footer'

type Props = {}

function how_to_start_investing ({}: Props) {
  return (
    <div className='max-w-2xl mx-auto'>
    <Head>
      <title>How to start investing in the stock market now: The easy way - Blog</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="How to start investing in the stock market now: The easy way - Blog"/>
            <meta property="og:description" content="Eleftherios Laliotis' Blog"/>
            <meta property="og:type" content="article"/>
            <meta property="og:url" content="https://laliotis.me/blog/how-to-start-investing-the-easy-way"/>
            <meta property="og:image" content="https://laliotis.me/investing_cover_image.png"/>
            <meta name="twitter :site" content="@greekdubliner" />
            <meta name= "twitter:creator" content="@greekdubliner"/>
            <meta property="og:url" content=" https://laliotis.me/blog/how-to-start-investing-the-easy-way"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:image:alt" content="A picture showing investing."/>
            <meta name="twitter:title" content="How to start investing in the stock market now: The easy way - Blog"/>
            <meta name="twitter:description" content="Eleftherio Laliotis' Blog"/>
            <meta name="twitter:image" content="https://laliotis.me/investing_cover_image.png"/>
    </Head>

    <Header />

    <div className='max-w-2xl flex mx-auto items-center px-4 lg:px-8'>

          <BackToBlogBtn />

    </div>

      <article className='mx-auto text-center py-16 max-w-2xl'>
            <h1 className='text-slate-100 font-semibold text-3xl text-start px-4 lg:px-8 my-2'>How to start investing in the stock market now: The easy way</h1>
            <p className='text-slate-300 text-sm text-left px-4 lg:px-8 mb-2'>2023-02-06</p>
            <p className='text-slate-300/80 italic text-sm text-left px-4 lg:px-8 mb-6'>Disclaimer: These are my current thoughts, and they are subject to change in the future.</p>
            <Image src={'/investing_cover_image.png'} height={300} width={600} className='w-full object-cover rounded-[8px]' alt="Colorful bull." />

            <p className='text-slate-300 text-left px-4 lg:px-8 mt-6'>
            I have been working as an investment management professional for the past 7 years for two of the biggest asset managers worldwide. What I’ve learned throughout my career, is that there are no secrets on how to become a successful investor.
            </p>

            <p className='text-slate-300 text-left px-4 lg:px-8 mt-6'>
            I will outline below (the secrets 😂) how to get started today with no hassle and no prior knowledge required. (Note: This is not a trading for a living guide, it is only a starting point for long term investors based on my tiny experience).
            </p>

            <p className='text-slate-300 text-left px-4 lg:px-8 mt-6'>
            Easy as 1, 2, 3… maybe 4:
            </p>

            <p className='text-slate-300 text-left px-4 lg:px-8 mt-6'>
            1. Download a trading app. I have been using <a href="https://join.robinhood.com/elefthl" target='_blank' className='text-emerald-300 hover:text-emerald-500 underline'>Robinhood</a> and <a href="https://a.webull.com/ga65GgeJQfmLaeKlw4" target='_blank' className='text-emerald-300 hover:text-emerald-500 underline'>WeBull</a> (in US). If you are in Europe, pick <a href="http://www.trading212.com/invite/Hr1Y89u2" target='_blank' className='text-emerald-300 hover:text-emerald-500 underline'>Trading 212</a> or <a href="https://www.etoro.com/people/llaliotis" target='_blank' className='text-emerald-300 hover:text-emerald-500 underline'>eToro</a>. I personally use both, but Trading 212 has a nice feature with pies which lets you invest in many assets at once. Robinhood is the easiest and most user friendly mobile app I have ever used but since they ripped off retail investors, I stopped using it and I switched over to WeBull. WeBull, on the other hand, is not that user friendly but it is a great app for investors like us.
            </p>

            <p className='text-slate-300 text-left px-4 lg:px-8 mt-6'>
            2. Do NOT ask what stock to invest in, this is something that nobody can answer for you. We all have different risk tolerance and financial goals in life. Since you have no idea about the stock market, all you have to do is go on the search bar and search for the S&P 500 ETF. There are several companies offering that such as Vanguard, State Street, BlackRock and many more. Just pick one and invest as much as you can afford.
            </p>

            <p className='text-slate-300 text-left px-4 lg:px-8 mt-6'>
            3. Do NOT expect to become a millionaire overnight, it won’t happen :). You need to be patient and try to contribute as often as you can. Even $50 a month can make a big difference in the long run.
            </p>

            <p className='text-slate-300 text-left px-4 lg:px-8 mt-6'>
            4. REMEMBER: Stock market is not gambling. Do yourself a favor and google the graph of the S&P 500 index for the past 30 years (last time I checked was up 9.87% annual average). Only goes up! Not a bad return for doing absolutely nothing!
            </p>

            <p className='text-slate-300 text-left px-4 lg:px-8 mt-6'>
            I hope this post will help you start your investing journey and also remember that you do not need to be rich in order to start investing. You can start with as little as $5. Just be consistent and patient.
            </p>

            <p className='text-slate-300 text-left px-4 lg:px-8 mt-6'>
            If you think you have mastered the skill (🤣) to download an app and buy an ETF, DM me and let me know how it went.
            </p>


            <p className='text-slate-300 text-left px-4 lg:px-8 mt-6'>
            Connect with me for more investing and fun stuff on <a href="https://twitter.com/greekdubliner" target='_blank' className='text-emerald-300 hover:text-emerald-500 underline'>Twitter</a>, <a href="https://www.linkedin.com/in/eleftherios-laliotis/" target='_blank' className='text-emerald-300 hover:text-emerald-500 underline'>LinkedIn</a>, and <a href="https://fcast.me/ll" target='_blank' className='text-emerald-300 hover:text-emerald-500 underline'>Farcaster</a>.
            </p>

          
      </article>

      <Footer />

    </div>
)
}

export default how_to_start_investing