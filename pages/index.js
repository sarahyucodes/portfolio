import Head from 'next/head'
//
import About from './../components/sections/About'
import Work from './../components/sections/Work'
import Links from './../components/sections/Links'
import { getSectionWork, getSectionLinks } from './../lib/api'

export default function Home({ 
  sectionWork,
  sectionLinks 
}) {
  return (
    <div className='Home'>
      <Head>
        <title>Sarah Yu</title>
        <meta name="description" content="Sarah Yu is a front-end web developer based in New York." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container max-w-screen-lg mx-auto py-10 px-5 md:px-10'>
        <About />
        <Work title={sectionWork.title} projects={sectionWork.projects} />
        <Links title={sectionLinks.title} links={sectionLinks.links} />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const sectionWork = await getSectionWork()
  const sectionLinks = await getSectionLinks()

  return {
    props: {
      sectionWork,
      sectionLinks
    }
  }
}
