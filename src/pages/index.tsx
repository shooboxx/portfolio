export default function Home() {
  return (
    <main className="">
      <nav className='flex my-2 text-white'>
        <div>LOGO</div>
          <div className='flex mx-auto gap-4'>
            <div>Projects</div>
            <div>Sandbox</div>
            <div>Expertise</div>
            <div>Photography</div>
          </div>
          <div>
            <button className='bg-ruby-red uppercase px-4 rounded-full pt-1 pb-2 text-white font-bold hover:bg-yellow-500 hover:cursor-pointer ml-auto' onClick={()=> alert('hi')}>
              Contact Me
            </button>
          </div>

      </nav>
      <section>
        <div className="relative">
          <h1 className='font-display uppercase text-[19.3vw] overflow-hidden leading-none text-mute-yellow block h-full'>Stefano</h1>
          <h1 className='font-display text-[18vw] uppercase overflow-hidden leading-none text-mute-yellow block mt-[-4%]'>Hepburn</h1>
        </div>
      </section>
      <section className='relative overflow-hidden bg-dark-burgandy pt-2 pb-4 w-[100vw]'>
        <div className='flex'>
          <h2 className='flex list-none text-mute-yellow font-bold text-[2.5vw] whitespace-nowrap animate-marquee'>
              <li className='mx-[3vw]'>Developer</li>
              <li className='mx-[3vw]'>Product Designer</li>
              <li className='mx-[3vw]'>Photographer</li>
              <li className='mx-[3vw]'>Husband</li>
              <li className='mx-[3vw]'>Entrepreneur</li>
          </h2>
          <h2 className='flex list-none text-mute-yellow font-bold text-[2.5vw] whitespace-nowrap  animate-marquee'>
              <li className='mx-[3vw]'>Developer</li>
              <li className='mx-[3vw]'>Product Designer</li>
              <li className='mx-[3vw]'>Photographer</li>
              <li className='mx-[3vw]'>Husband</li>
              <li className='mx-[3vw]'>Entrepreneur</li>
            </h2>
        </div>

      </section>
    </main>
  )
}
