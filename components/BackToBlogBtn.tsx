import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

type Props = {}

function BackToBlogBtn({}: Props) {
  return (
    <div>
        <a href="/blog" className='flex text-sm items-center space-x-1 text-slate-100 rounded-lg border border-zinc-700 hover:border-emerald-300 py-1 pr-2.5 pl-1'> <ChevronLeftIcon className='h-4 w-4'/>Back to blog</a>
    </div>
  )
}

export default BackToBlogBtn