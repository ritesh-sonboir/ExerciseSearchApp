import React from 'react'
import '../assets/images/banner.png'
function HeroSection() {
  return (
    <div className=' min-h-screen px-5 py-20 scroll-smooth'>
    <div className="container mx-auto flex flex-col">
<div
  className="flex flex-col my-auto mb-8 mt-12 w-full grid-cols-1 justify-center md:flex md:gap-5 lg:grid lg:grid-cols-2"
>
  <div
    className="col-span-1 flex flex-col justify-center text-center md:w-3/5 lg:w-full lg:justify-center lg:text-left"
  >
    <div className="mb-4 flex items-center justify-center lg:justify-start">
      <h4 className="ml-2 text-sm font-bold tracking-widest text-primary">
        TRENDIEST TAILWIND TEMPLATES
      </h4>
    </div>
    <h1
      className="mb-8 text-4xl font-extrabold leading-tight text-dark-grey-900 lg:text-5xl xl:w-11/12 xl:text-6xl"
    >
      Take your website to the next level with Horizon UI
    </h1>
    <p
      className="mb-10 text-base font-medium leading-7 text-dark-grey-600 xl:w-3/4"
    >
      Save hundreds of hours trying to create and develop a dashboard from
      scratch. The fastest, most responsive & trendiest dashboard is here.
      Seriously.
    </p>
    <div className="flex flex-col items-center lg:flex-row gap-4">
      <button
        className="flex items-center rounded-xl px-5 py-4 text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 hover:text-gray-200"
      >
        Explore Exercises
      </button>
      <button
        className="flex items-center rounded-xl px-5 py-4 text-sm font-medium text-dark-grey-900 bg-transparent"
      >
        <img
          className="mr-2 h-6"
          src=""
          alt=""
        />
       Read Blog
      </button>
    </div>
  </div>
  <div className="flex items-center justify-center lg:flex">
    <img
      className="w-4/5 rounded-2xl"
      src="https://indianewengland.com/wp-content/uploads/2019/09/Johnny-Sins.jpg"
      alt="header image"
    />
  </div>
</div>
</div>
</div>
  )
}

export default HeroSection