export default function ExtLinkComponent({
    children,
    href,
    underline=true,
    decoration='decoration-1',
    classNames
}) {
    const styles = `
        transition
        hover:text-blue-700
        ${underline ? `underline underline-offset-1 ${decoration}` : null}
        ${classNames}
    `
    
    return (
        <a href={href} target='blank' rel='noreferrer' className={styles}>{children}</a>
    )
}