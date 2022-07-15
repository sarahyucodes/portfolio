import Head from 'next/Head'
//
import Container from './Container'
import Footer from './sections/Footer'

export default function Layout({
    children,
    title='Sarah Yu',
    content='Sarah Yu is a front-end web developer based in New York.'
}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={content} />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className='min-h-screen'>
                <Container>
                    {children}
                </Container>
            </main>
            <Footer />
        </>
    )
}