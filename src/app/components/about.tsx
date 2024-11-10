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
        src="myimage.jpeg"
        width={300}
        height={300}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
       
      </h1>
      <p className="mb-5 leading-relaxed">
    My strong passion for the ever-evolving world of web development and cutting-edge technologies. My primary interests lie in mastering front-end frameworks like React and honing my skills in back-end development using Node.js. With a solid foundation in HTML, CSS, TypeScript, and JavaScript, I am driven by the desire to build dynamic, user-centric applications that push the boundaries of what's possible on the web.
By staying at the forefront of technological advancements, I aim to create seamless, innovative digital experiences that can positively impact users and drive the future of web development.
      </p>
      <p className="mb-5 leading-relaxed">
      I am keen interest in the latest advancements in web development. I am fascinated by the process of creating immersive, responsive user interfaces using technologies such as HTML, CSS, JavaScript, and TypeScript, as well as building robust back-end systems with Node.js and React.
My goal is to continually refine my skills and leverage cutting-edge tools to design intuitive, efficient applications that enhance the user experience and drive innovation in the tech industry.


      </p>
      <div className="flex justify-center">
        <Link target="_blank" href={"https://hackathon-omega-beryl.vercel.app/"}>
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
