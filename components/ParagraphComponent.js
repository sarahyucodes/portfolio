export default function ParagraphComponent({
    children,
    paddingBottom='pb-3'
}) {
    const classNames=`
        ${paddingBottom}
        last:pb-0
    `
    
    return (
        <p className={classNames}>{children}</p>
    )
}