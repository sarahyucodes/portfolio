import ReactMarkdown from 'react-markdown'
//
import Container from './../Container'
import Section from './../Section'
import ParagraphComponent from '../ParagraphComponent'
import ExtLinkComponent from '../ExtLinkComponent'

export default function Footer({ footerContent }) {
    return (
        footerContent ? (
            <footer className='text-sm text-slate-700 font-medium'>
                <Container>
                    <Section paddingTop='pt-12 md:pt-24 pb-0'>
                        <div className='col-span-full md:col-span-4'>
                            {footerContent.copyright}
                        </div>
                        <div className='col-span-10 md:col-start-9 md:col-span-4'>
                            <ReactMarkdown
                                components={{
                                    p: props => <ParagraphComponent {...props} paddingBottom={'pb-2'} />,
                                    a: props => <ExtLinkComponent {...props} />
                                }}
                            >
                                {footerContent.siteInfo}
                            </ReactMarkdown>
                        </div>
                    </Section>
                </Container>
            </footer>
        ) : null
    )
}