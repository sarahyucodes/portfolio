import Head from 'next/head'
//
import Links from './../components/Links'

export default function Home() {
  return (
    <div className='Home'>
      <Head>
        <title>Sarah Yu</title>
        <meta name="description" content="Sarah Yu is a front-end web developer based in New York." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container mx-auto py-10 px-5 md:py-36 md:px-10'>
        <h1 className='text-2xl'>
          Sarah Yu is a front-end <span className='whitespace-nowrap'>web developer </span><br />
          based in New York.
        </h1>
        <Links />
      </main>
    </div>
  )
}
