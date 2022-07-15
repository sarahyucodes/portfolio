import Image from 'next/image'

export default function ProjectPreview({
    project,
    index
}) {
    const { url } = project.imagesCollection.items[0]

    return (
        <>
            <div className='relative w-full aspect-[16/9]'>
                <Image 
                    className=''
                    src={url}
                    alt={project.title}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className='flex items-center justify-between pt-2 pb-4 md:pt-3 md:pb-0'>
                <span className='mr-4 font-semibold text-xs'>0{index + 1}</span>
                <h3 className='text-base font-medium'>{project.title}</h3>
            </div>
        </>
    )
}