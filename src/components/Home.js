import React from 'react'
import image from '../home_bg.jpeg'

const Home = () => {
  return (
    <main>
      <img src={image} alt="Backgroud" className='absolute object-cover w-full h-screen'/>
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-6xl text-green-100 font-bold leading-none lg:leading-snung home-name'>Aloha. I'm Yingjie.</h1>
      </section>
    </main>
  )
}

export default Home
