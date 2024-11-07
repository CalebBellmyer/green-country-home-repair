import React from 'react'

const AboutSection = () => {
  return (
    <section className="flex flex-col items-center justify-center p-4 bg-gray-100">
      <span className="text-lg md:text-2xl font-semibold hover:text-slate-500 transition duration-300 ">
          About Us
      </span>

      <div className="w-full max-w-4xl mx-auto">
        <p className='text-lg py-2'>
          Green Country Home Repair LLC was started in Bartlesville in 2015 by brothers Johnny and
          Patrick Bellmyer. With a goal of doing quality home repairs and exceeding customer’s
          expectations our small company has thrived and grown. In 2023, Jose Ojeda joined as a
          partner bringing with him a long history of quality construction and a wealth of knowledge.
        </p>
        <p className='text-lg py-2'>
          We now have a team of craftsmen and top quality sub-contractors that offer everything
          from small repairs to building custom homes. We have become known for our custom
          decks and outdoor entertainment areas, over the top kitchens, and bathrooms that make
          you not want to leave them.
        </p>
        <p className='text-lg py-2'>
          We take pride in our work and keep a clean work site. Many customers have commented
          that they were very pleased with our work but were also very happy with the cleanliness we
          kept the work area (their home)!
        </p>
        <p className='text-lg py-2'>
          We typically book projects well in advance so call today for a free estimate and get your
          project scheduled!
        </p>
      </div>
          

    </section>
  )
}

export default AboutSection