export default function Container({
    children,
    main, // for <Main> only
}) {
    const classNames = `
        container
        max-w-screen-lg
        mx-auto
        py-10 px-5 md:px-10
    `

    if (main) {
        return (
            <main className={classNames}>
                {children}
            </main>
        )
    }
    
    return (
        <div className={classNames}>{children}</div>
    )
}