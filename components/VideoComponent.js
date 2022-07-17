export default function VideoComponent({
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
            playsInline={autoplay}
        >
            <source src={source} />
        </video>
    )
}