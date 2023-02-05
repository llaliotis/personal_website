import { Popover, Transition } from '@headlessui/react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'

type Props = {}

const navigation = [
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: 'mailto:llaliotis@gmail.com' },
  ]

function Header({}: Props) {
  return (
<nav className='py-5'>
    <Popover>
            <div className="mx-auto max-w-2xl relative px-4 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 md:justify-end" aria-label="Global">
                <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <a href="/">
                        <span className="sr-only">Eleftherios Laliotis</span>
                        <p className='text-xl text-slate-100 font-semibold'>Eleftherios Laliotis</p>
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-300">
                        <span className="sr-only">Open main menu</span>
                        <Bars3BottomRightIcon className="h-7 w-7" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:space-x-5">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-emerald-300 hover:text-emerald-500">
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-[#191919] shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-end px-5 pt-4">
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-300">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-2 text-center px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-3 text-base font-medium text-gray-300 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
    </Popover>
</nav>

  )
}

export default Header