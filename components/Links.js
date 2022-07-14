export default function Links({ links }) {
    return (
        <section className='grid grid-cols-3 gap-x-2 py-10 md:grid-cols-4 md:py-20'>
          <div className='col-span-1'>
            <h2 className='font-semibold'>Links</h2>
          </div>
          <div className='col-span-2 md:cols-span-3'>
            <ul>
                {
                    links.map((link, index) => {
                        return (
                            <li key={index}>
                                <a href={link.url} target='_blank' className='text-blue-700 font-semibold underline decoration-2 hover:text-slate-900 transition'>
                                    {link.title}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
          </div>
        </section>
    )
}