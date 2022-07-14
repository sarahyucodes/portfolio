export default function Links() {
    return (
        <section className='grid grid-cols-3 gap-x-2 py-10 md:grid-cols-4'>
          <div className='col-span-1'>
            <h2 className='font-semibold'>Links</h2>
          </div>
          <div className='col-span-2 md:cols-span-3'>
            <ul>
              <li><a href='mailto:sarahyu.work@gmail.com' target='_blank' className='text-blue-700 font-semibold underline decoration-2 hover:text-slate-900 transition'>Email</a></li>
              <li><a href='https://www.linkedin.com/in/sarah---yu' target='_blank' className='text-blue-700 font-semibold underline decoration-2 hover:text-slate-900 transition'>LinkedIn</a></li>
              <li><a href='https://drive.google.com/file/d/1YW7dZuptZRE0iRVncIeU1YttGwgZE6Vh/view?usp=sharing' target='_blank' className='text-blue-700 font-semibold underline decoration-2 hover:text-slate-900 transition'>Resume</a></li>
            </ul>
          </div>
        </section>
    )
}