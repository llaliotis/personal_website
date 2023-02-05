import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header'
import Image from 'next/image'
import BackToBlogBtn from '../../components/BackToBlogBtn'
import Footer from '../../components/Footer'

type Props = {}

function regulating_the_frontends_of_Decentralized_Exchanges({}: Props) {
  return (
    <div className='max-w-2xl mx-auto'>
    <Head>
      <title>We may be due for a different kind of recession - Blog</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="We may be due for a different kind of recession - Blog"/>
            <meta property="og:description" content="Eleftherios Laliotis' Blog"/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://laliotis.me/blog/we-may-be-due-for-a-different-kind-of-recession"/>
            <meta property="og:image" content="https://laliotis.me/Recession_cover_image.png"/>
            <meta name="twitter :site" content="@greekdubliner" />
            <meta name= "twitter:creator" content="@greekdubliner"/>
            <meta property="og:url" content=" https://tazes.me/blog/we-may-be-due-for-a-different-kind-of-recession"/>
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
            <Image src={'/Regulating the frontends of Decentralized Exchanges.png'} height={300} width={600} className='w-full object-cover rounded-[8px]' alt="A graph with unemployment rate and inflation." />

            <p className='text-slate-300 text-left px-4 lg:px-8 mt-6'>
            It is now the 5th of December, 2022, at 01:29. I’m sipping some Balley’s and thinking about the regulations of frontends of DEXs. Maybe I need to get a life, but this is a conversation for another day.
            </p>

            <p className='text-slate-300 text-left px-4 lg:px-8 mt-6'>
            I remembered Sam Bankman <span className='line-through'>Fraud</span> Fried's argument in his <a href="https://www.youtube.com/watch?v=Ytaa_5liwMA" target='_blank' className='text-orange-500 hover:text-orange-700 underline'>debate</a> with Erik Voorhees. He said that regulations are coming, and if we act fast as a community and make our own suggestions, we may avoid strict and unreasonable rules put in by people who don’t understand crypto’s value. No matter what we know about SBF now, he had a valid point. But, of course, his suggestion for adding the Know Your Customer procedure to the frontends of DEXs can only be taken as a bad joke. Voorhees then beautifully answered that even if rules are coming and we have to start negotiations with the regulators, you (SBF) are already giving too much up.
            </p>

            <p className='text-slate-300 text-left px-4 lg:px-8 mt-6'>
            Now that FTX, SBF’s company, collapsed, crypto regulations are 99% coming worldwide. Maybe SBF “misused” ~8 billion dollars to better back his point (lol). It is also a perfect opportunity for EU regulators to show again how much they hate innovation. I’m being acrimonious here because I know for a fact that there are people in the EU at an institutional level that fully understand the benefits and innovation of crypto, and they are actively promoting them.
            </p>

            <p className='text-slate-300 text-left px-4 lg:px-8 mt-6'>
            Knowing all the above, in a scenario where we have absolutely no choice but to put regulations on the frontends of DEXs, what would they look like?
            </p>

            <p className='text-slate-300 text-left px-4 lg:px-8 mt-6'>
            <strong>My answer:</strong> Enforce a quiz with some DEX-related questions for each wallet. If the wallet owner answers at least 3/5 of them, then give them a <a href="https://www.coindesk.com/learn/what-are-soulbound-tokens-the-non-transferrable-nft-explained/" target='_blank' className='text-orange-500 hover:text-orange-700 underline'>Soulbound token</a> and let them interact with the protocol without any limitations. In some cases, maybe add another quiz with 2-3 questions about more complex actions like providing liquidity.
            </p>

            <p className='text-slate-300 text-left px-4 lg:px-8 mt-6'>
            So essentially, I suggest to token gate the frontends with quizzes. This 100% eliminates the argument of crypto skeptics about user safety. In addition, it protects people that actually don’t know what they are doing, prevents them from losing their money, and offers them an incentive to learn more about how Decentralized Exchanges work. The <a href="https://www.investopedia.com/terms/a/accreditedinvestor.asp" target='_blank' className='text-orange-500 hover:text-orange-700 underline'>accredited investor</a> term inspires my suggestion. Even though I believe this term does not make much sense now that information about the financial markets is easily accessible, I think the logic behind it is correct.
            </p>

            <p className='text-slate-300 text-left px-4 lg:px-8 mt-6'>
            Let’s take <a href="https://gmx.io/#/" target='_blank' className='text-orange-500 hover:text-orange-700 underline'>GMX</a> for example: each new wallet has to complete a 5-question quiz, and if they answer at least 3 of 5, they get full access to the platform. If they pass, they get a Soulbound token to avoid retaking the quiz and eliminate the possibility of transferring access to a 3rd party. The questions will be like: “What is Leverage?”, “What is a Short position?” and “What does liquidation price mean?”.
            </p>

            <p className='text-slate-300 text-left px-4 lg:px-8 mt-6'>
            To conclude, there is absolutely no reason to add any sort of regulations on the frontends of Decentralized Exchanges. Interacting with those protocols should be a fundamental human right. But if it comes to the point that regulations are 99% coming, I believe that adding quizzes is the best way to do so.
            </p>

            <p className='text-slate-300 text-left px-4 lg:px-8 mt-6'>
            I would love to hear your thoughts. As I said, these are my current ideas and are subject to change. You can find me on <a href="https://twitter.com/nickolas_tazes" target='_blank' className='text-orange-500 hover:text-orange-700 underline'>Twitter</a>, <a href="https://www.linkedin.com/in/nickolas-tazes/" target='_blank' className='text-orange-500 hover:text-orange-700 underline'>LinkedIn</a>, and <a href="https://fcast.me/tazes" target='_blank' className='text-orange-500 hover:text-orange-700 underline'>Farcaster</a>.
            </p>

          
      </article>

      <Footer />

    </div>
)
}

export default regulating_the_frontends_of_Decentralized_Exchanges