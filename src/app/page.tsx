'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Blog from '../components/Blog'


export default function Home() {
  const { scrollYProgress } = useScroll();
  const dynamicBg = useTransform(scrollYProgress, [0, 0.5, 1], ['#061320', '#0a192f', '#02060d']);
  return (

    <motion.main style={{ backgroundColor: dynamicBg }} className='text-white'>


      <Navbar />

      <Hero />
      
  <div className='flex-col flex pb-32'> 

      <About />
      
      <Projects />

      <Experience />

      <Blog />

  </div>

    </motion.main>
  )
}

