import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <div className='max-w-2xl px-4 lg:px-8'>
    <footer className='flex mx-auto py-8 lg:py-6 justify-between border-t border-[#292929]'>
     <div className='text-sm text-gray-300'>
      <span>This website is open source.
       <br />
        Feel free to fork it.</span>
      </div>
      <div className='text-sm text-gray-300'>
      &#169; 2023
      </div>
    </footer>
    </div>
  )
}

export default Footer