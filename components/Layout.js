import { motion } from 'framer-motion'
import Head from 'next/Head'
//
import Container from './Container'
import Footer from './sections/Footer'

export default function Layout({
    children,
    title='Sarah Yu',
    content='Sarah Yu is a front-end web developer based in New York.'
}) {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 0 }
    }

    return (
        <>
                <Head>
                    <title>{title}</title>
                    <meta name='description' content={content} />
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <main className='min-h-screen'>
                    <motion.main
                        initial='hidden'
                        animate='enter'
                        exit='exit'
                        variants={variants}
                        transition={{ 
                            type: 'tween',
                            duration: 0.4,
                        }}
                    >
                        <Container>
                                {children}
                        </Container>
                    </motion.main>
                </main>
                <Footer />
        </>
    )
}