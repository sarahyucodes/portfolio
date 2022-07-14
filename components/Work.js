import Section from './Section'

export default function Work({
    title,
    projects
}) {
    return (
        <Section 
            title={title}
            content={
                <ul>
                    {
                        projects.map((project, index) => {
                            return (
                                <li 
                                    key={index}
                                    className='
                                        font-medium
                                        md:font-normal md:text-xl
                                    '>
                                    <span className='mr-4'>0{index + 1}</span>
                                    <span>{project.title}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            }
        />
    )
}