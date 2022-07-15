export default function Container({ children }) {    
    return (
        <div className='container max-w-screen-lg mx-auto py-10 px-5 md:px-10'>
            {children}
        </div>
    )
}