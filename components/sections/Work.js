import Section from './../Section'
import ProjectPreview from '../ProjectPreview'

export default function Work({
    title,
    projects
}) {
    return (
        <Section title={title} titleSpan='col-span-full'>
            <ul className='col-span-full md:grid md:grid-cols-12 md:gap-x-6 md:gap-y-8'>
                {
                    projects.map((project, index) => {
                        return (
                            <li 
                                key={index}
                                className='
                                    col-span-6
                                    font-medium
                                    md:font-normal md:text-xl
                                '>
                                <ProjectPreview project={project} index={index} />
                            </li>
                        )
                    })
                }
            </ul>
        </Section>
    )
}