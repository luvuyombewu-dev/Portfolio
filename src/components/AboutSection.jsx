import React from 'react';
import about from "../assets/about.png";

export const AboutSection = () => {
  return (
    <section className='text-white mt-20 relative overflow-hidden'
    id='about'>
        <div className='max-w-7xl mx-auto px-6 lg:px-16 md:grid md:grid-cols-2
        gap-12 items-center py-16 xl:px-16 relative z-10'>
            <div data-aos='fade-right'>
                <h2 className='text-5xl md:text-6xl font-extrabold text-white'>
                    More <span className='text-primary'>About</span> Me
                </h2>
                <p className='text-gary-400 text-base lg:text-lg
                    mb-10 lg:py-6 leading-relaxed'>
                        I am committed to delivering high-quality software solutions through clean,
                        maintainable code and industry best practices. I approach every project with
                        a strong focus on problem-solving, performance, security, and user experience.
                        <br>
                        </br>
                        I enjoy collaborating with teams, adapting to new technologies and
                        continuously expanding my knowledge to build reliable applications that create
                        meaningful value for users and businesses.
                </p> 
                <div className=' grid grid-cols-3 gap-6 max-w-xl'>
                    <div className='text-center rounded-2x1
                    bg-[#111a3e] border border-[#1f1641] p-5
                    transition-all duration-300 hover:border-primary/50'>
                        <h3 className='text-primary font-bold
                        text-2x1 md:text-3x1'>+1</h3>
                        <p className='text-xs text-gray-400
                        uppercase tracking-wider mt-0.5'>Client</p>
                    </div>

                    <div className='text-center rounded-2x1
                    bg-[#111a3e] border border-[#1f1641] p-5
                    transition-all duration-300 hover:border-primary/50'>
                        <h3 className='text-primary font-bold
                        text-2x1 md:text-3x1'>+10</h3>
                        <p className='text-xs text-gray-400
                        uppercase tracking-wider mt-0.5'>Projects</p>
                    </div>
                    <div className='text-center rounded-2x1
                    bg-[#111a3e] border border-[#1f1641] p-5
                    transition-all duration-300 hover:border-primary/50'>
                        <h3 className='text-primary font-bold
                        text-2x1 md:text-3x1'>+1</h3>
                        <p className='text-xs text-gray-400
                        uppercase tracking-wider mt-0.5'>Years</p>
                    </div>
                </div>          
            </div>
            <div className='mt-16 md:mt-0 flex justify-center
            lg:justify-end relative' data-aos='fade-left'>
                <div className='relative w-64 h-64 md:w-96 md:h-96'>
                    <div className='absolute inset-0 z-0  
                    border-primary translate-x-3
                    translate-y-3'>
                    </div>
                    <div className='absolute h-96 z-10 p-2
                    -translate-y-1/6 lg:right-3
                    md:right-40 sm:right-16'>
                        <img src={about} 
                        alt="About"
                        className='w-64 h-64 md:w-96 md:h-[480px]
                        object-cover rounded-2xl transform
                        transition-transform duration-500
                        hover:scale-110'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default AboutSection;