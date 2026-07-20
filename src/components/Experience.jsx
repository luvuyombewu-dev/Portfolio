import { Layout, Terminal, Cpu, Database, Briefcase, Building, Calendar } from "lucide-react";
import React from 'react';

const Experience = () => {
    const Skills =[
        {
            id:1,
            name: 'Java',
            width: "90%",
            icon: Terminal
        },
        {
            id:2,
            name: 'Spring Boot',
            width: "60%",
            icon: Cpu
        },
        {
            id:3,
            name: 'React.js',
            width: "80%",
            icon: Layout
        },
        {
            id:4,
            name: 'PostgreSQL',
            width: "85%",
            icon: Database
        },
        
    ];

    const Experiences = [
        {
            id: 1,
            title: "Java Developer",
            company: " CPUT Projects",
            date: "2025 - Present",
            description: "Developed Java applications using OOP principles, JavaFX, and database integration.",
        },
        {
            id: 2,
            title: "Frontend Developer",
            company: "Portfolio Project",
            date: "2026",
            description: "Built responsive web interfaces using React, JavaScript, HTML, and CSS.",
        },
        {
            id: 3,
            title: "Backend Developer",
            company: "Spring Boot Projects",
            date: "2026",
            description: "Built responsive web interfaces using React, JavaScript, HTML, and CSS.",
        },
    ]
  return (
    <section className='text-white py-20 relative overflow-hidden'
    id='skills'>
        <div className='max-w-7xl mx-auto px-6 lg:px-16 items-center py-16 xl:px-16 relative z-10'>
            <div className='grid md:grid-cols-2 gap-16 items-start'>
                <div data-aos='fade-right'>
                    <h2 className='text-5xl md:text-6xl font-extrabold text-white mb-12'>
                        Technical <span className='text-primary'>
                            Skills</span> 
                    </h2>
                    <div className='space-y-8'>
                        {Skills.map((skill) =>{
                            const SkillIcon = skill.icon;
                            return (
    <div key={skill.id} className='group'>
        <div className='flex items-center justify-between mb-7'>
            <div className='flex items-center gap-3'>
                <div className='p-2 bg-[#111a3e] rounded-lg
                group-hover:bg-primary transition-colors duration-300'>
                    <SkillIcon size={20} 
                    className='text-primary group-hover:text-white'/>
                </div>
                <span className='font-medium tracking-wide'>
                    {skill.name}
                </span>
            </div>
            <span className='text-primary font-bold'>
                {skill.width}
            </span>
            </div>
            <div className='h-2 w-full bg-[#131d30] rounded-full
            p-0.5'>
                <div
                className='h-full rounded-full 
                bg-cyan-400 shadow-[0_0_10px_#06a2c2]'
                style={{width: skill.width}}>
                </div>
            </div>
         </div>
                                
                            );
                        })}
                    </div>
                </div>
                <div className='fade-left'>
                    <h2 className='text-5xl md:text-6xl font-extrabold text-white mb-12'>
                        Work <span className='text-primary'>Experience</span>
                    </h2>
                    <div className='space-y-6'>
                        {Experiences.map((exp) =>(
                            <div key={exp.id}
                            className='group relative p-6 rounded-2xl bg-[#1f1641] border border-[#1f1641] hover:border-primary/50 transition-all duration-300'>
                                <div className='flex gap-4'>
                                    <div className='shrik-'>
                <div className='p-3 bg-[#050816] rounded-xl border
                border-gray-800 group-hover:border-primary
                transition-colors'>
                    <Briefcase className='text-primary' size={24}/>
                </div>
                                    </div>
                <div className='grow'>
                    <h3 className='text-xl font-bond text-white
                    grup-hover:text-primary transition-colors'>
                        {exp.role}
                    </h3>
                    <div className='flex flex-col sm:flex-row
                    sm:item-center gap sm:gap-4 mt-2 text-sm
                    text-gray-400'>
                        <span className='flex items-center gap-1.5'>
                            <Building size={14} className='text=primary'/>
                            {exp.company}
                        </span>
                        <span className='flex items-center gap-1.5'>
                            <Calendar size={14} className='text-primary'/>
                            {exp.date}
                        </span>
                    </div>
                </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Experience;