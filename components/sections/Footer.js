import Container from './../Container'
import Section from './../Section'

export default function Footer() {
    return (
        <footer className='text-sm text-slate-700 font-medium'>
            <Container>
                <Section paddingTop='pt-12 md:pt-24'>
                    <div className='col-span-full md:col-span-4'>
                        © 2022 — Sarah Yu
                    </div>
                    <div className='col-span-10 md:col-start-9 md:col-span-4'>
                        <p>
                            This site was created using React, Next.js, Tailwind CSS, Contentful, and Netlify ✌️
                        </p>
                    </div>
                </Section>
            </Container>
        </footer>
    )
}