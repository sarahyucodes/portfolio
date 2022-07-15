export default function Section(props) {
    const {
        children,
        title,
        content,
        titleSpan,
        paddingTop='pb-20',
        paddingBottom='pb-20'
    } = props

    const sectionClasses = `
        grid
        grid-cols-12
        gap-6
        pt-10
        ${paddingTop}
        ${paddingBottom}
    `

    return (
        <section className={sectionClasses}>
            {
                title ? 
                (
                    <div className={`${titleSpan} ?? col-span-2`}>
                        <h2 className='font-bold md:text-xl md:font-semibold'>{title}</h2>
                    </div>
                ) : null
            }
            { 
                content ? 
                <div className='col-span-10'>{content}</div> 
                : null
            }
            {children}
        </section>
    )
}