import { motion } from 'framer-motion'
import Head from 'next/head'
//
import Container from './Container'
import Footer from './sections/Footer'

export default function Layout({
    children,
    title='Sarah Yu',
    content='Sarah Yu is a front-end web developer based in New York.',
    navigation,
    footerContent
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
                <nav>
                    <Container>
                        {navigation}
                    </Container>
                </nav>
                <main>
                    <motion.main
                        initial='hidden'
                        animate='enter'
                        exit='exit'
                        variants={variants}
                        transition={{ 
                            type: 'tween',
                            duration: 0.5,
                        }}
                    >
                        <Container>
                                {children}
                        </Container>
                    </motion.main>
                </main>
                <Footer footerContent={footerContent} />
        </>
    )
}