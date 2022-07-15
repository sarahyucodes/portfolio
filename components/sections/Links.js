import Section from './../Section'

export default function Links({ 
    title,
    links 
}) {
    return (
        <Section
            title={title}
            content={
                <ul>
                    {
                        links.map((link, index) => {
                            return (
                                <li key={index}>
                                    <a href={link.url} target='_blank' rel="noreferrer" className='hover:text-blue-700 font-medium underline underline-offset-1 decoration-2 transition'>
                                        {link.title}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            }
        />
    )
}