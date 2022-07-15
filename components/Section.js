export default function Section(props) {
    const {
        children,
        title,
        content,
        titleSpan,
        paddingBottom
    } = props

    return (
        <section className={`
            grid grid-cols-12 gap-6 
            pt-10 ${paddingBottom ?? 'pb-10'}
        `}>
            {title ? (
                <div className={`${titleSpan} ?? col-span-2`}>
                    <h2 className='font-bold md:text-xl md:font-semibold'>{title}</h2>
                </div>
            ) : null}
            {content ? <div className='col-span-10'>{content}</div> : null}
            {children}
        </section>
    )
}