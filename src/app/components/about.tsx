import React from 'react'
import Link from 'next/link'


const About = () => {
  return (
    <div id='about'>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img
        className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
        alt="hero"
        src="circle-grey.jpg"
        width={300}
        height={300}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
       
      </h1>
      <p className="mb-5 leading-relaxed">
      I am a clinical psychologist and a homeopath doctor, with a strong foundation in holistic and evidence-based approaches to mental health and wellness. My expertise spans traditional therapeutic practices and homeopathy, allowing me to support individuals’ physical and emotional well-being through an integrative approach.
      </p>
      <p className="mb-5 leading-relaxed">
      In addition, I am actively working on AI technologies, with a focus on web development languages and frameworks such as HTML, CSS, JavaScript, TypeScript, and Next.js. 
      </p>
      <div className="flex justify-center">
        <Link target="_blank" href={"https://milstones12.vercel.app/"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          MY CV
        </button>
        </Link>
       
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
