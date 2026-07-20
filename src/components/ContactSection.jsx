import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkedAlt } from 'react-icons/fa';

const ContactSection = () => {

    const contactInfo = [
        {
            id: 1,
            icon: FaEnvelope,
            title: 'Email',
            value: 'luvuyombewu@gmail.com',
            link: 'mailto:luvuyombewu@gmail.com'
        },
        {
            id: 2,
            icon: FaGithub,
            title: 'Github',
            value: 'github.com/luvuyombewu-dev',
            link: 'https://github.com/luvuyombewu-dev'
        },
        {
            id: 3,
            icon: FaLinkedin,
            title: 'LinkedIn',
            value: 'linkedin.com/in/luvuyo-mbewu',
            link: 'https://linkedin.com/in/luvuyo-mbewu'
        },
        {
            id: 4,
            icon: FaMapMarkedAlt,
            title: 'Location',
            value: 'Cape Town',
            link: null
        }
    ];

    return (
        <section className="py-20 bg-gray-900" id="contact">

            <div className="container mx-auto px-4 max-w-6xl">

                <div className="text-center mb-12">

                    <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-1">
                        Let's <span className="text-primary">Connect</span>
                    </h2>

                    <div className="w-28 h-1 bg-primary mx-auto mt-2 rounded-full"></div>

                </div>


                <div className="grid md:grid-cols-2 gap-8">

                    <div>

                        <p className="text-gray-400 mb-8 leading-relaxed">
                            I'm always open to discussing new opportunities, software projects,
                            collaborations and innovative ideas. Whether you have a project in mind,
                            a potential opportunity or just want to connect, feel free to reach out.
                            I would love to hear from you and explore how we can work together
                            to create meaningful technology solutions.
                        </p>


                        <div className="space-y-6">

                            {contactInfo.map((info) => {





                                const Icon = info.icon;

                                return (
                                    <div 
                                        key={info.id}
                                        className="flex items-center gap-4 group"
                                    >

                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">

                                            <Icon 
                                                size={18} 
                                                className="text-primary"
                                            />

                                        </div>


                                        <div>

                                            <h4 className="text-white font-medium text-sm">
                                                {info.title}
                                            </h4>


                                            {info.link ? (

                                                <a
                                                    href={info.link}
                                                    className="text-gray-400 text-sm hover:text-primary transition-colors"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {info.value}
                                                </a>

                                            ) : (

                                                <p className="text-gray-400 text-sm">
                                                    {info.value}
                                                </p>

                                            )}

                                        </div>

                                    </div>
                                );

                            })}

                        </div>

                    </div>


                    {/* Contact Form */}

                    <div className="bg-gray-800 rounded-lg p-6">

                        <form>

                            <div className="mb-4">

                                <label 
                                    htmlFor="email"
                                    className="text-white block mb-2 text-sm font-medium"
                                >
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors"
                                    placeholder="luvuyombewu@gmail.com"
                                    required
                                />

                            </div>


                            <div className="mb-6">

                                <label
                                    htmlFor="message"
                                    className="text-white block mb-2 text-sm font-medium"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Your Message..."
                                    rows="4"
                                    required
                                />

                            </div>


                            <button
                                type="submit"
                                className="w-full px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/80 transition-colors"
                            >
                                Send Message
                            </button>


                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ContactSection;