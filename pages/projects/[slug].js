import Link from 'next/link'
//
import Layout from './../../components/Layout'
import Section from './../../components/Section'
import Image from './../../components/Image'
import { getAllProjectsWithSlugs, getProjectBySlug } from './../../lib/api'

export default function Project({ project }) {
    return (
        <Layout
            navigation={
                <Link href={'/'}>
                    <button className='flex items-center text-2xl group'>
                        <span className='inline-block mr-2'>←</span> 
                        <span className='inline-block group-hover:underline group-hover:underline-offset-2 group-hover:decoration-2'>Back to home</span>
                    </button>
                </Link>
            }
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
                                        <div>
                                            <a href={project.link} target='_blank' rel='noreferrer' className='font-medium text-base transition hover:text-blue-700'>
                                                See live <span className='inline-block -rotate-45 font-bold'>→</span>
                                            </a>
                                        </div>
                                    ) : null
                                }
                            </div>
                            
                        </div>
                        <div className='col-span-full'>
                            <p className='text-xl md:text-2xl'>
                                {project.description}
                            </p>
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
                                            <Image 
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
                        <div className='col-span-full flex flex-wrap' aria-label='technologies'>
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

    console.log(data ?? null);

    return {
        props: {
            project: data ?? null
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