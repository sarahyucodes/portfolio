import Section from './../Section'

export default function About() {
    return (
        <Section paddingBottom='pb-20'>
            <h1 className='
                col-span-full
                text-2xl
                pb-8
                before:content-[""] before:inline-block before:w-6 before:h-6 before:bg-blue-700 before:rounded-full before:mr-3
                flex items-center
            8 md:text-3xl
            '>
                Sarah Yu
            </h1>
            <p className='col-span-full text-2xl md:col-span-8 md:text-3xl'>
                Front-end web developer translating beautiful designs into thoughtful digital experiences. Currently based in <span className='whitespace-nowrap'>New York.</span>
            </p>
        </Section>
    )
}