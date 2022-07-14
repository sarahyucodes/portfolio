export default function Section(props) {
    const {
        children,
        title,
        content,
        paddingBottom
    } = props

    return (
        <section className={`
            grid grid-cols-6 gap-x-6 
            pt-10 ${paddingBottom ?? 'pb-10'}
        `}>
            {title ? (
                <div className='col-span-1'>
                    <h2 className='font-bold md:text-xl md:font-semibold'>{title}</h2>
                </div>
            ) : null}
            {content ? <div className='col-span-5'>{content}</div> : null}
            {children}
        </section>
    )
}