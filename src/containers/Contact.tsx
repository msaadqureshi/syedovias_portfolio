'use client';
import React, { useRef, useState } from 'react';
import { contactSection } from '@/lib/content/contact';
import { Wrapper } from '@/components';
import axios from 'axios';
import { author } from '@/lib/content/portfolio';

const Contact = () => {
  const { title } = contactSection;

  // Create refs for the input fields
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Access the values of the inputs via refs
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;

    if (!name || !email || !message) {
      setStatus('Please fill in all fields.');
      return; // Exit if validation fails
    }
    const formData = new FormData();
    formData.append('name', nameRef.current?.value || '');
    formData.append('email', emailRef.current?.value || '');
    formData.append('message', messageRef.current?.value || '');
    try {
      setStatus('Sending...');
      fetch(author.send_email_api_url, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })
        .then(async (response) => {
          // await response.json();
          console.log('>>>>>', response.json());
          // if (response?.data.status === 'success') {
          setStatus('Email sent successfully!');
          // Clear the inputs
          if (nameRef.current) nameRef.current.value = '';
          if (emailRef.current) emailRef.current.value = '';
          if (messageRef.current) messageRef.current.value = '';
          // } else {
          //   setStatus('Failed to send email.');
          // }
        })
        .catch(() => setStatus('Failed to send email.'));
    } catch (error) {
      console.error(error);
      setStatus('Failed to send email.');
    }
  };

  return (
    <Wrapper
      id="contact"
      className="max-w-xl mx-auto text-center py-16 md:py-24 mb-20 md:mb-32"
    >
      <div className="mb-12 rounded-sm lg:bg-bg-secondary px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
        <h2 className="heading-secondary mb-5">{title}</h2>
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
                  ref={nameRef} // Ref for the input
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
                  ref={emailRef} // Ref for the input
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
                  ref={messageRef} // Ref for the textarea
                ></textarea>
              </div>
            </div>
            <div className="w-full px-4">
              <button
                type="submit"
                className="text-sm p-4 px-6 py-3 border-2 block mx-auto w-fit font-mono capitalize border-accent text-accent hover:bg-accent-light focus:outline-none focus:bg-accent-light duration-150 cursor-pointer mt-12 rounded-lg"
              >
                Send
              </button>

              <p className="mt-4">{status}</p>
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Contact;
