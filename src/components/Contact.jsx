import React, { useState } from 'react'
import Title from './Title';
import Text from './Text';
import Button from './Button';
import { contact } from '../utils/Contact';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className='flex justify-center items-stretch'>
      <div className='w-2/3 p-20'>
        <div className='max-w-xl mx-auto'>
          <Title css={'mb-3'}>restons en contact</Title>
          <Text css={'mb-5'}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
            ad architecto, voluptas quidem ex fugit commodi reiciendis quod
            deleniti possimus deserunt veritatis earum natus reprehenderit aliquam
            totam, fugiat est voluptates?
          </Text>
          <form onSubmit={handleSubmit} className='grid gap-5'>
            <div className='grid grid-cols-2 gap-10'>
              <div className='grid'>
                <input
                  placeholder='Nom complet'
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                  className='bg-transparent border-b-2 border-primary bg-light py-1 placeholder:text-primary outline-none'
                />
              </div>
              <div className='grid'>
                <input
                  placeholder='Entreprise (facultatif)'
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className='bg-transparent border-b-2 border-primary bg-light py-1 placeholder:text-primary outline-none'
                />
              </div>
            </div>
            <div className='grid'>
              <input
                placeholder='Email'
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className='bg-transparent border-b-2 border-primary bg-light py-1 placeholder:text-primary outline-none'
              />
            </div>
            <div className='grid'>
              <textarea
                placeholder='Message'
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={1}
                required
                className='bg-transparent border-b-2 border-primary bg-light py-1 placeholder:text-primary outline-none'
              ></textarea>
            </div>
            <button type="submit" className='mt-2'>
              <Button text={'Envoyer'} css={'bg-secondary text-sm'} />
            </button>
          </form>
        </div>
      </div>
      <div className="w-1/3 bg-light flex flex-col justify-center gap-5 p-20 font-bold">
        <h2 className='uppercase text-3xl text-primary'>infos</h2>
        <div className="flex items-center gap-5">
          <img src="src/assets/images/phone.png" alt="Téléphone" className='w-6 h-6' />
          <p className='text-lg'>{contact.phone}</p>
        </div>
        <div className="flex items-center gap-5">
          <img src="src/assets/images/email.png" alt="Email" className='w-6 h-6' />
          <p className='text-lg'>{contact.email}</p>
        </div>
        <div className="flex items-center gap-5">
          <img src="src/assets/images/company.png" alt="Entreprise" className='w-6 h-6' />
          <p className='text-lg'>{contact.company}</p>
        </div>
        <div className="flex items-center gap-5">
          <img src="src/assets/images/pin.png" alt="Localisation" className='w-6 h-6' />
          <p className='text-lg'>{contact.localisation}</p>
        </div>
      </div>
    </section>
  )
}