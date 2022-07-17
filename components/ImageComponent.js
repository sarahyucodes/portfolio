import Image from 'next/image'

export default function ImageComponent({
    url,
    altText,
    layout='fill',
    objectFit='cover',
    type,
}) {
    return (
        <Image 
            src={url}
            alt={altText}
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOU9btRDwADlwHEWQ/OtQAAAABJRU5ErkJggg=='
            unoptimized={type === 'image/gif'}
            layout={layout}
            objectFit={objectFit}
        />
    )
}