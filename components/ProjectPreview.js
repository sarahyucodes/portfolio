import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function ProjectPreview({
    project,
    index
}) {
    const router = useRouter()

    const handleClickImage = e => {
        e.preventDefault()
        router.push(`/projects/${project.slug}`)
    }
    
    return (
        <>
            <div className='relative w-full aspect-[16/9] cursor-pointer peer' onClick={handleClickImage}>
                <Image 
                    src={project?.imagesCollection?.items[0]?.url}
                    unoptimized={project?.imagesCollection?.items[0]?.contentType === 'image/gif' ?? false}
                    alt={project.title}
                    placeholder='blur'
                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOU9btRDwADlwHEWQ/OtQAAAABJRU5ErkJggg=='
                    layout='fill'
                    objectFit='cover'
                    priority
                />
            </div>
            <Link href={`/projects/${project.slug}`}>
                <button className='w-full flex items-center justify-between pt-2 pb-5 md:pt-3 md:pb-0 group'>
                    <span className='mr-4 font-semibold text-xs text-slate-700'>0{index + 1}</span>
                    <h3 className='
                        text-base font-medium
                        transition-all
                        group-hover:-translate-x-4 group-hover:after:content-["→"] group-hover:after:ml-2
                        group-focus:-translate-x-4 group-focus:after:content-["→"] group-focus:after:ml-2
                    '>
                        {project.title}
                    </h3>
                </button>
            </Link>
        </>
    )
}