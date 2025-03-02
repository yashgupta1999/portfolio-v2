'use client';

import { useState, FormEvent } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { LiaEnvelopeOpen } from 'react-icons/lia';
import { HiChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';

const ContactCard = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Email sent successfully!');
        } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.error}`);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div id="contact" className="w-full lg:h-screen">
            <div className="max-w-[1240px] mx-auto px-2 py-16 w-full">
                <p className="uppercase text-xl tracking-widest text-gray-500">Contact</p>
                <h2 className="py-4 uppercase text-4xl font-bold text-[#232324]">Contact Me</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    <div className='col-span-3 lg:col-span-2 shadow-xl shadow-gray-400 rounded-xl p-4 w-full h-full'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <Image className='rounded-xl hover:scale-105 ease-in duration-300 p-2' height={1000} width={1000} src="/contact.jpg" alt="contact"/>
                            </div>
                            <h2 className='py-4 text-4xl uppercase font-bold text-[#232324]'>Yash Gupta</h2>
                            <p className='uppercase text-gray-500'>AI Engineer</p>
                            <p className='text-gray-500'>
                                I'm currently exploring opportunities to contribute my expertise in AI, system design, and software development. If you're looking for a passionate engineer with a creative edge, let's connect!
                            </p>
                            <p className='pt-24'>Connect with me</p>
                            <div className="flex items-center justify-between py-4">
                                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <a href="https://www.linkedin.com/in/yash-gupta-1a20871a6/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedinIn size={20} />
                                    </a>
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                                        <FaGithub size={20} />
                                    </a>
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <a href="mailto:guptayash.connect@gmail.com" target="_blank" rel="noopener noreferrer">
                                        <LiaEnvelopeOpen size={20} />
                                    </a>
                                </div>  
                            </div>
                        </div>
                    </div>
                    <div className='col-span-3 lg:col-span-3 shadow-xl shadow-gray-400 rounded-xl p-4 w-full h-full'>
                        <div className='lg:p-4 h-full'>
                            <form onSubmit={handleSubmit}>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='text-sm py-2'>Name</label>
                                        <input 
                                            className='border-2 rounded-lg p-3 flex border-gray-300'
                                            type='text'
                                            name='name'
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm py-2'>Phone</label>
                                        <input 
                                            className='border-2 rounded-lg p-3 flex border-gray-300'
                                            type='text'
                                            name='phone'
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='text-sm py-2'>Email</label>
                                    <input 
                                        className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='text-sm py-2'>Subject</label>
                                    <input 
                                        className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type='text'
                                        name='subject'
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='text-sm py-2'>Message</label>
                                    <textarea 
                                        className='border-2 rounded-lg p-3 border-gray-300'
                                        rows={10}
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button 
                                    className='w-full p-4 text-gray-100 mt-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors'
                                    type='submit'
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center py-12'>
                    <Link href="/#about">
                        <div className='flex justify-center items-center shadow-xl shadow-gray-400 rounded-xl p-4'>
                            <HiChevronDoubleUp size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContactCard; 