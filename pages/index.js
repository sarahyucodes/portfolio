import Head from 'next/head'
//
import Container from './../components/Container'
import About from './../components/sections/About'
import Work from './../components/sections/Work'
import Links from './../components/sections/Links'
import Footer from './../components/sections/Footer'
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
      <Container>
        <About />
        <Work title={sectionWork.title} projects={sectionWork.projects} />
        <Links title={sectionLinks.title} links={sectionLinks.links} />
      </Container>
      <Footer /> 
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
