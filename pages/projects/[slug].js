import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
//
import Layout from './../../components/Layout'
import Section from './../../components/Section'
import ImageComponent from './../../components/ImageComponent'
import VideoComponent from './../../components/VideoComponent'
import ParagraphComponent from '../../components/ParagraphComponent'
import ExtLinkComponent from '../../components/ExtLinkComponent'
import { getAllProjectsWithSlugs, getProjectBySlug, getFooter } from './../../lib/api'

export default function Project({ project, footerContent }) {
    return (
        <Layout
            navigation={
                <Link href={'/'}>
                    <button className='flex items-center text-base font-medium group'>
                        <span className='inline-block mr-2'>←</span> 
                        <span className='inline-block group-hover:underline group-hover:underline-offset-2 group-hover:decoration-2'>Back to home</span>
                    </button>
                </Link>
            }
            footerContent={footerContent}
        >
            {
                project ? (
                    <Section>
                        <div className='col-span-full'>
                            <h1 className='text-2xl md:text-3xl'>{project.title}</h1>
                            <div className='text-slate-600 pt-2 mb-2 md:flex md:items-end md:justify-between'>
                                {
                                    project.client ? (
                                    <div className='pb-1 md:pb-0 font-medium text-base'>
                                        {project.client}
                                    </div>
                                    ) : null}
                                {
                                    project.link ? (
                                    <ExtLinkComponent
                                        href={project.link}
                                        underline={false} classNames='font-medium text-base'
                                    >
                                        See live <span className='inline-block -rotate-45 font-bold'>→</span>
                                    </ExtLinkComponent>
                                    ) : null
                                }
                            </div>
                            
                        </div>
                        <div className='col-span-full text-xl md:text-2xl'>
                           <ReactMarkdown
                                components={{
                                    p: props => <ParagraphComponent {...props} />
                                }}
                           >
                            {project.description}
                           </ReactMarkdown>
                        </div>
                        <div className='col-span-full'>
                            {
                                project.images.map((image, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`
                                            relative
                                            w-full
                                            ${image.width/image.height > 1 ? 'aspect-[16/9]' : 'aspect-[4/5]'}
                                        `}>
                                            <ImageComponent 
                                                url={image.url}
                                                altText={image.description}
                                                type={image.contentType}
                                                objectFit='contain'
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {
                            project.video ? (
                                <div className='col-span-full relative'>
                                    <VideoComponent
                                        source={project.video.url}
                                        autoplay={project.videoAutoplay}
                                    />
                                </div> 
                            ) : null
                        }
                        <div className='col-span-full flex flex-wrap md:py-3' aria-label='technologies'>
                            {
                                project.technologies?.map((technology, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className='
                                            px-2 py-1 mr-2 last:mr-0 rounded border border-slate-600
                                            text-xs font-medium
                                            text-slate-600
                                            '>
                                            {technology}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Section>
                ) : null
            }
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const data = await getProjectBySlug(params.slug)
    const footerContent = await getFooter()

    return {
        props: {
            project: data ?? null,
            footerContent
        }
    }
}

export async function getStaticPaths() {
    const allProjects = await getAllProjectsWithSlugs()
    
    return {
        paths: allProjects?.map(({ slug }) => `/projects/${slug}`) ?? [],
        fallback: true
    }
}