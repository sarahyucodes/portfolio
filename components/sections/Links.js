import Section from './../Section'
import ExtLinkComponent from '../ExtLinkComponent'

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
                                    <ExtLinkComponent
                                        href={link.url}
                                        classNames='font-medium'
                                        decoration='decoration-2'
                                    >
                                        {link.title}
                                    </ExtLinkComponent>
                                </li>
                            )
                        })
                    }
                </ul>
            }
        />
    )
}