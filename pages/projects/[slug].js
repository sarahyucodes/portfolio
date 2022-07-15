import { useRouter } from 'next/router'
//
import Container from './../../components/Container'
import Section from './../../components/Section'
import { getAllProjectsWithSlugs, getProjectBySlug } from './../../lib/api'

export default function Project({ project }) {
    const router = useRouter()

    const {
        title,
        client,
        description,
        technologies
    } = project

    return (
        <Container>
            <button
                className='flex items-center text-2xl group'
                onClick={() => router.back()}
            >
                <span className='inline-block mr-2'>←</span> 
                <span className='inline-block group-hover:underline group-hover:underline-offset-2 group-hover:decoration-2'>Back to home</span>
            </button>
            <Section>
                <div className='col-span-full'>
                    <h1 className='text-2xl md:text-3xl'>{title}</h1>
                    <div className='text-sm font-medium text-blue-700 pt-2'>{client ?? null}</div>
                </div>
                <div className='col-span-full'>
                    <p className='text-xl md:text-2xl'>
                        {description}
                    </p>
                </div>
                <div className='col-span-full flex flex-wrap' aria-label='technologies'>
                    {
                        technologies?.map((technology, index) => {
                            return (
                                <div
                                    key={index}
                                    className='
                                    px-2 py-1 mr-2 last:mr-0 rounded border border-slate-900
                                    text-xs font-semibold text-slate-900
                                    '>
                                    {technology}
                                </div>
                            )
                        })
                    }
                </div>
            </Section>
        </Container>
    )
}

export async function getStaticProps({ params }) {
    const data = await getProjectBySlug(params.slug)

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