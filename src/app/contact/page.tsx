'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="w-full pt-20">
      {/* Hero Banner */}
      <section
        className="relative w-full min-h-[50vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: 'url("/image_iitd.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#111',
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 space-y-3 px-4 max-w-3xl">
          {/* <p className="text-sm font-semibold text-white tracking-[0.28em]">ACADEMICS</p> */}
          <h1 className="text-7xl font-extrabold text-white">Contact us</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolore fugit sit odit voluptate modi dignissimos nemo saepe laboriosam explicabo ducimus ad, illo earum ipsum, veniam asperiores laborum officia minus.
        </div>
      </section>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className=" w-auto h-6 bg-white"></div>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <section className="bg-white flex justify-evenly py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <h1 className="text-5xl font-bold text-orange-700 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-orange-600 mb-12">
            Make a contribution and help us improve.
          </p>
          <div className='w-auto h-10'></div>

          {/* Form Grid */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-24">
            
            {/* Left Column */}
            <div className="space-y-6 grid gap-4">
              <div>
                <label className="block text-sm font-medium text-orange-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full border text-2xl border-orange-600 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-orange-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full border text-2xl border-orange-600 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-orange-700 mb-2">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full border text-2xl border-orange-600 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col w-full justify-center h-full">
              <label className="block text-sm font-medium text-orange-700 mb-2">
                Message
              </label>
              <textarea
                rows={10}
                className="w-full flex-[5] border text-md border-orange-600 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 flex-1"
              ></textarea>
              
              <div className="w-auto h-1 bg-transparent"></div>

              <button
                type="submit"
                className="mt-6 w-auto flex-[1] bg-orange-700 text-white text-sm border-lg border-orange-700 px-10 py-3 font-semibold hover:bg-orange-800 transition"
              >
                
                Send
              </button>

              {/* Success Message */}
              <p className="mt-4 flex-[1] text-orange-700 text-center font-medium">
                Thanks for submitting!
              </p>
            </div>
          
          </form>
        </div>
      </section>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className=" w-auto h-6 bg-white"></div>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    </div>
  );
}
