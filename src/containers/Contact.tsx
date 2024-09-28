'use client';
import React, { useState } from 'react';
import { contactSection } from '@/lib/content/contact';
import { Button, Wrapper } from '@/components';
import { getSectionAnimation } from '@/styles/animations';
import axios from 'axios';
const Contact = () => {
  const { subtitle, title, paragraphs, link } = contactSection;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus('Sending...');
    axios
      .post('https://syedovais.com/send-email.php', formData)
      .then((response) => {
        if (response.data.status === 'success') {
          setStatus('Email sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setStatus('Failed to send email.');
        }
      })
      .catch(() => setStatus('Failed to send email.'));
  };

  return (
    <Wrapper
      id="contact"
      className="max-w-xl mx-auto text-center  !py-16 md:!py-24 mb-20 md:mb-32"
      {...getSectionAnimation}
    >
      {/* <p className="mb-3 font-mono text-sm capitalize text-accent">
        {subtitle}
      </p>
      <h2 className="heading-secondary !mb-5">{title}</h2>

      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}

      <Button type="link" size="lg" href={link} center className="mt-12">
        Say Hello
      </Button> */}
      <div
        className="mb-12 rounded-sm   lg:bg-bg-secondary px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
        data-wow-delay=".15s"
      >
        <h2 className="heading-secondary !mb-5">{title}</h2>
        {/* <p className="mb-3 font-mono text-sm capitalize text-accent">
          {subtitle}
        </p> */}
        <form onSubmit={handleSubmit}>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-8">
                <label
                  htmlFor="name"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-8">
                <label
                  htmlFor="email"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full px-4">
              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Enter your Message"
                  className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="w-full px-4">
              <button
                type="submit"
                // className="mt-12"
                // className="mt-12 w-full py-3 px-6 rounded-lg"
                className="text-sm p-4 px-6 py-3 border-2 block mx-auto w-fit font-mono capitalize  border-accent text-accent hover:bg-accent-light focus:outline-none focus:bg-accent-light duration-150 cursor-pointer mt-12    rounded-lg"
              >
                Send
              </button>

              <p className="mt-4">{status}</p>
            </div>
          </div>
        </form>
        {/* <form>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-8">
                <label
                  htmlFor="name"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                />
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2">
              <div className="mb-8">
                <label
                  htmlFor="email"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-4">
              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Enter your Message"
                  className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                ></textarea>
              </div>
            </div>
            <div className="w-full px-4">
              <Button
                type="link"
                size="lg"
                // href={link}
                href={''}
                center
                className="mt-12"
              >
                Send
              </Button>
            </div>
          </div>
        </form> */}
      </div>
    </Wrapper>
  );
};

export default Contact;
