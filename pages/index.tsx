import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

const projects = [
  {
    name: 'Swollet',
    handle: 'Swollet is a Financial Empowerment Platform focused on gamifying financial education and providing on-chain credentials.',
    imageUrl:
      'https://swollet.com/images/swollet_logo_for_website.jpeg',
    date: 'To Be Launched',
    link: 'https://swollet.com',
  },
  {
    name: 'Ultimo Digital Marketing',
    handle: 'A one stop shop agency which helps entrepreneurs build online businesses. From logos & designs to website development & marketing.',
    imageUrl:
      'https://swollet.com/images/ultimo_logo_for_website.jpeg',
    date: 'Nov 2020 - Present',
    link: 'https://ultimodigitalmarketing.com/',
  },
  {
    name: 'KaramelaDAO',
    handle: 'At KaramelaDAO we experiment with new technologies and new concepts and we try to push the limits of what is possible in the crypto space. If you have an interesting/crazy idea, join us and let us build together.',
    imageUrl:
      'https://swollet.com/images/karamela_logo_for_website.jpeg',
    date: 'Nov 2021 - Present',
    link: 'https://karameladao.com/',
  },
  {
    name: 'Nannylingual',
    handle: 'A nanny agency that helps families find the right nanny for them and to teach their child a second language naturally.',
    imageUrl:
      'https://nannylingual.com/images/nannylingual.png',
    date: 'Oct 2022 - Present',
    link: 'https://nannylingual.com/',
  },
  {
    name: 'Udemy course: ChatGPT for Bussines',
    handle: 'This course is designed for beginners who have no prior programming knowledge but are interested in learning about the power of natural language processing and how to use it to enhance their business operations, content creation and writing code with ChatGPT.',
    imageUrl:
      'https://s.udemycdn.com/meta/default-meta-image-v2.png',
    date: 'Jan 2023- Present',
    link: 'https://www.udemy.com/course/chatgpt-for-business-using-ai-for-content-creation/',
  },
]

const Home: NextPage = () => {
  return (
<div className='max-w-2xl mx-auto'>
      <Head>
        <title>laliotis</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

    <div className="relative px-4 sm:px-4 lg:px-8 mt-6 lg:mt-10">
      <div className='bg'>
      <div className="text-lg max-w-2xl mx-auto">
        <h1>
          <span className="mt-2 hidden lg:inline-block text-4xl text-left leading-8 font-extrabold tracking-tight text-slate-100">Founder of <a className="text-emerald-300 hover:text-emerald-500" href="https://swollet.com" target="_blank">Swollet</a></span>
          <span className="mt-2 block lg:hidden text-4xl text-left leading-8 font-extrabold tracking-tight text-slate-100">Founder of <a className="text-emerald-300 hover:text-emerald-500" href="https://swollet.com" target="_blank">Swollet</a></span>
        </h1>
        <p className="mt-6 text-base text-gray-300 mx-auto">Since the beginning of 2020, I have been creating and implementing a range of groundbreaking initiatives with the aim of addressing significant social and economic issues. The projects I have undertaken include:</p>
      </div>

  <div>
      <div className="mt-6 mx-auto max-w-2xl pb-8">
        <ul role="list" className="divide-y divide-[#292929]">
          {projects.map((project) => (
            <li key={project.link} className="">
              <a href={project.link}>
              <div className="flex space-x-4 hover:bg-white hover:bg-opacity-5 px-1 py-4 rounded-lg">
                <div className="flex-shrink-0 ">
                  <img className="h-8 w-8 rounded-full" src={project.imageUrl} alt="Project logo" />
                </div>
                <div className="flex-1">
                  <p className="text-base font-medium text-emerald-300">{project.name}</p>
                  <p className="text-sm mt-1 text-gray-300 max-w-[400px]">{project.handle}</p>
                </div>
                <div>
                  <div
                    className="inline-flex text-xs text-gray-300">
                    {project.date}
                  </div>
                </div>
              </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
  </div>
  </div>

    <div className="mt-16 max-w-2xl mx-auto"> 
      <h2 className='text-slate-100 font-semibold text-3xl'>Find me online</h2>
      <div className='grid grid-cols-2 space-y-1 mt-6'>
      <a className="text-emerald-300 hover:bg-white hover:bg-opacity-5 px-1 py-2 rounded-lg" href="https://twitter.com/greekdubliner" target="_blank">Twitter &#8599;</a>
      <a className="text-emerald-300 hover:bg-white hover:bg-opacity-5 px-1 py-2 rounded-lg" href="https://www.linkedin.com/in/eleftherios-laliotis/" target="_blank">LinkedIn &#8599;</a>
      <a className="text-emerald-300 hover:bg-white hover:bg-opacity-5 px-1 py-2 rounded-lg" href="farcaster://profiles/4563" target="_blank">Farcaster &#8599;</a>
      <a className="text-emerald-300 hover:bg-white hover:bg-opacity-5 px-1 py-2 rounded-lg" href="https://github.com/llaliotis" target="_blank">Github &#8599;</a>
      </div>
    </div>

    <div className="mt-16 max-w-2xl mx-auto"> 
      <h2 className='text-slate-100 font-semibold text-3xl'>Interviews & Articles</h2>
        <p className="mt-6 text-base text-gray-300 mx-auto">I've written and talked about Swollet on websites and podcasts.</p>
        <ul className='grid grid-cols-1 gap-2 mt-6 divide-y divide-[#292929]'>

        <div className='hover:bg-white hover:bg-opacity-5 px-1 py-4 rounded-lg'>
        <a className="text-emerald-300" href="https://open.spotify.com/episode/2Bk8ZWpLgzko7nlxAVCMfa?si=02834a8bd0c14a0f" target="_blank">Eleftherios Laliotis & Alexandros Adamakis - Co-Founders of Swollet. The world’s first Learn-to-Earn investing platform in the metaverse
        <div className='flex items-center space-x-2'>
          <img className="h-4 w-4 rounded-lg" src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/2626688/2626688-1623837884553-50993947f9769.jpg" alt="Tony podcast logo" />
            <li className='text-gray-300 text-sm'>Greece Chats with Tony Kariotis</li>
        </div>
        </a> 
        </div>

        <div className='hover:bg-white hover:bg-opacity-5 px-1 py-4 rounded-lg'>
        <a className="text-emerald-300" href="https://open.spotify.com/episode/7F5VEQcSmZ2C2GmU2D7ygO?si=VyLVvlhcT-Gb5h3pahzd_w" target="_blank">S2E2: Learn-to-Earn in Web3 w/ Lef Laliotis
        <div className='flex items-center space-x-2'>
          <img className="h-4 w-4 rounded-lg" src="https://pbs.twimg.com/profile_images/1551251745665417216/tdGpfcvz_400x400.jpg" alt="Web3 podcast logo" />
            <li className='text-gray-300 text-sm'>The Web3 Podcast</li>
        </div>
        </a> 
        </div>

        <div className='hover:bg-white hover:bg-opacity-5 px-1 py-4 rounded-lg'>
            <a className="text-emerald-300" href="https://open.spotify.com/episode/24455qjooDUWT0DvFVakF6?si=WmfU201IQuuVOzw8wLftyQ" target="_blank">Blockchain applications & Web3 in education w/ Lefteris Laliotis (in Greek)
            <div className='flex items-center space-x-2'>
              <img className="h-4 w-4 rounded-lg" src="http://static-1.ivoox.com/canales/9/7/9/2/3771674002979_LG.jpg" alt="Serial faces logo" />
              <li className='text-gray-300 text-sm'>Serial Faces με τον Απόστολο Πάνο</li>
            </div>
            </a> 
        </div>

        <div className='hover:bg-white hover:bg-opacity-5 px-1 py-4 rounded-lg'>
            <a className="text-emerald-300" href="https://laliotis.substack.com/" target="_blank">Forward Thinking on Substack
            <div className='flex items-center space-x-2'>
            <img className="h-4 w-4 rounded-lg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX/////Zxn/WwD/ZA//YgP/5Nn/gU//h1j/zr3/n3v//fv/ZhX/bij/cjP/WQD/XgD/sJP/on7/9vH/7eX/287/1MX/yLT/wKn/bCL/uqH/jmH/dzn/fkf/gE7/il3/j2b/mnL/qor/l27/7uf/vqf/p4f/5tz/0sKKn4B0AAACmklEQVR4nO3c63LaMBBAYbCMuQgkMIRAQ0KaC7z/G5ZpO5kE44uM5NV4zvcAS88Pb+pNhsEAAAAAAAAAAAAAAAAAAErMDs+ZrOeXwIVWCUsXgQvToTBNIYUUUkghhRRSSCGFFPahUP7taR64MBtLO4YtBAAAAAA0MhJ3Chs4MyaRZYaBC/t/p6GQQgoppJBCCimkkEIKKfRRaBIrK9mFLRxMxJ0DFwIAAAAAGphNxa0CF9pUmO3/74BD/yU7hRRSSCGFFFJIIYUUUkghhRRSSCGFFFJIIYUUUkghhRRSSCGFFFJIIYUUUkihA9XzQpVk5r7GuAuVGa8Ho4PRPS3UyWLzd8hkaNs3Rlxo0+3XmL1tPSfawtQsf8xZtX0cIy1U5jW/mrR+adcYZaE2h1tfX7VZJC0exwgLtd09lEzbKtuDQps+VsxbGteBsRWm5vescmD+6vg4xlWozPF6wRStM6f/AcRUeFkwo0ZDH+YOKyeewsuCmTQe+5g2XjnRFFq7dxrceOVEUpiaVfWCKcrfmq2cKAqV+fXeYvbo0ORxjKBQJ0+bltPP8/qXDvFCbYfb+jGlPmpXjnRhapf1Qyo/4DOp/gjZQmWm9T/h67wfK1eOZKEyYz/fgLupWjlyhXcsmKLJrnTlSBVqq+9ZMEV7W7JyhAovC8b1J3ydvOTOIVJ440bhw+07h0ChNlmor9jePBVXTueFOpmX3Sh82OrrldN1YfWNwofl1Wm128LaG4UP+fTH49hloTJvbV4h3J3G3xq7K2x8o/Dh22m1q0KnG4UPX3eOjgpdbxQ+/L9zdFKYms/wC6bo32m1g8KWNwofTpnR4QuNx1cId+ddErzQ7yuEuw8d+AMkHsDY/gUAAAAAAAAAAAAAACl/ALHybO6d68YkAAAAAElFTkSuQmCC" alt="Substack logo" />
            <li className='text-gray-300 text-sm'>substack.com</li>
            </div>
            </a> 
        </div>
            
        <div className='hover:bg-white hover:bg-opacity-5 px-1 py-4 rounded-lg'>
            <a className="text-emerald-300" href="https://medium.com/@llaliotis/how-to-start-investing-in-the-stock-market-now-the-easy-way-f0649f0cedc3" target="_blank">How to start investing in the stock market now: The easy way.
            <div className='flex items-center space-x-2'>
            <img className="h-4 w-4 rounded-lg" src="https://miro.medium.com/max/1400/1*psYl0y9DUzZWtHzFJLIvTw.png" alt="Medium logo" />
            <li className='text-gray-300 text-sm'>Medium</li>
            </div>
            </a> 
        </div>

          </ul>
    </div>
      
    <div className="mt-16 max-w-2xl mx-auto">
      <h2 className='text-slate-100 font-semibold text-3xl'>Where I live</h2>
        <figure className='mt-6 text-gray-300'>
        <figcaption className='mb-2'>Based in Dublin, Ireland 🍀 but traveling the world frequently.</figcaption>
          <img className="w-full rounded-lg" src="/Screenshot 2022-09-27 at 5.11.15 PM.png" alt="The map of Greece with a pin at Volos" width="1310" height="873"/>
        </figure>
    </div>

        <figure className="mt-16 max-w-2xl mx-auto">
          <figcaption className="text-[#191919]">laliotis.eth was here</figcaption>
        </figure>

      <Footer />

    </div>
  </div>
  )
}

export default Home
