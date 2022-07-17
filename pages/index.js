import Layout from './../components/Layout'
import About from './../components/sections/About'
import Work from './../components/sections/Work'
import Links from './../components/sections/Links'
import { getSectionWork, getSectionLinks, getFooter } from './../lib/api'

export default function Home({ 
  sectionWork,
  sectionLinks,
  footerContent
}) {
  return (
    <Layout footerContent={footerContent}>
      <About />
      <Work title={sectionWork.title} projects={sectionWork.projects} />
      <Links title={sectionLinks.title} links={sectionLinks.links} />
    </Layout>
  )
}

export async function getStaticProps() {
  const sectionWork = await getSectionWork()
  const sectionLinks = await getSectionLinks()
  const footerContent = await getFooter()

  return {
    props: {
      sectionWork,
      sectionLinks,
      footerContent
    }
  }
}
