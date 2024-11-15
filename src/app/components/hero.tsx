import React from "react"
import Link from "next/link"




const Hero = () => {
  return (
    <div>
     <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I&apos;m
           <br  />
           ABEER FATIMA
          </h1>
            <div className="w-[400px] h-[2px] bg-gray-500"></div>
            <p className="mb-4 leading-relaxed">
          
            Hello! I am Abeer Fatima, a passionate undergraduate student with a strong commitment to pursuing a career in medical field. I am fascinated by the human body, its complexities, and the endless possibilities for improving healthcare through innovation. As I work toward becoming a healthcare professional, I also have a deep interest in Artificial Intelligence (AI) and its transformative potential.
            </p>
            <div className="flex justify-center">
              <Link href={"#contact"}>
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Contact
              </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded mx-auto w-[20rem]"
              alt="hero"
              width={300}
              height={300}
              src="myimage.jpeg"
            />
          </div>
        </div>
      </section>
 
 


    </div>
  )
}

export default Hero
