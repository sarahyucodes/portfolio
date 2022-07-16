export default function Video({
    source,
    autoplay
}) {
    return (
        <video
            className='w-full h-full'
            controls={!autoplay}
            autoPlay={autoplay}
            loop={autoplay}
            muted={autoplay}
        >
            <source src={source} />
        </video>
    )
}