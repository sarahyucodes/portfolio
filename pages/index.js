import { useState, useEffect } from 'react'
import Head from 'next/head'
//
import Links from './../components/Links'

const contactLinks = [
  {
    title: 'Email',
    url: 'mailto:sarahyu.work@gmail.com'
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sarah---yu'
  },
  {
    title: 'Resume',
    url: 'https://drive.google.com/file/d/1YW7dZuptZRE0iRVncIeU1YttGwgZE6Vh/view?usp=sharing'
  }
]

export default function Home() {
  const [links, setLinks] = useState([])

  useEffect(() => {
    setLinks(contactLinks)
  }, [])

  return (
    <div className='Home'>
      <Head>
        <title>Sarah Yu</title>
        <meta name="description" content="Sarah Yu is a front-end web developer based in New York." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container max-w-screen-lg mx-auto py-10 px-5 md:py-36 md:px-10'>
        <h1 className='text-2xl'>
          Sarah Yu is a front-end <span className='whitespace-nowrap'>web developer </span><br />
          based in New York.
        </h1>
        <Links links={links} />
      </main>
    </div>
  )
}
