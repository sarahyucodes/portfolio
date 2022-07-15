export default function Main(props) {
    return (
        <main className='container max-w-screen-lg mx-auto py-10 px-5 md:px-10'>
            {props.children}
        </main>
    )
}