import React from 'react'
import Header from '../components/Header'

type Props = {}

function notfound({}: Props) {
  return (
    <div>
     <Header />
     <div className="flex min-h-full flex-col mt-24 mb-12">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8 bg">
          <div className="py-16">
            <div className="text-center">
              <p className="text-base font-semibold text-slate-100">404</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">Page not found.</h1>
              <p className="mt-2 text-base text-gray-300">Sorry, we couldn’t find the page you’re looking for.</p>
              <div className="mt-6">
                <a href="/" className="text-base font-medium text-orange-500 hover:text-orange-700">
                  Go back home
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default notfound