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

      {/* Contact Content */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Get In Touch
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-red-600 mb-2">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    dept.ee@iitdelhi.ac.in
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 mb-2">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    +91-11-2659 1042
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 mb-2">Address</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Department of Electrical Engineering<br />
                    Indian Institute of Technology Delhi<br />
                    New Delhi 110016, India
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 mb-4">Office Hours</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Monday - Friday: 10:00 AM - 5:00 PM<br />
                    Saturday & Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Your Phone Number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary bg-red-600 hover:bg-red-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Find Us
          </h2>
          <div className="bg-gray-300 dark:bg-gray-700 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-600 dark:text-gray-400">
              📍 Map will be embedded here
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
