'use client';

import { useState, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send email');
            }

            // Clear form after submission
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            alert('Email sent successfully!');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email. Please try again.');
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
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg backdrop-blur-md bg-opacity-80">
            {/* <h2 className="text-2xl font-bold mb-4">Contact Me</h2> */}
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4">
                    {/* <label className="text-sm mb-1">Name</label> */}
                    <div className="flex space-x-2">
                        <Input 
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="flex-1"
                            placeholder="Your Name"
                        />
                        <Input 
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="flex-1"
                            placeholder="Your Email"
                        />
                    </div>
                </div>
                <div className="flex flex-col mb-4">
                    {/* <label className="text-sm mb-1">Subject</label> */}
                    <Input 
                        type='text'
                        name='subject'
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Subject"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    {/* <label className="text-sm mb-1">Message</label> */}
                    <Textarea 
                        rows={4}
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Your Message"
                    />
                </div>
                <Button 
                    className='w-full mt-4'
                    type='submit'
                >
                    Send Message
                </Button>
            </form>
        </div>
    );
};

export default ContactForm; 