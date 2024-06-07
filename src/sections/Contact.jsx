import React, { useState } from "react";
import Title from "../components/Title";
import Text from "../components/Text";
import Button from "../components/Button";
import { contact } from "../utils/Contact";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="flex items-stretch justify-center max-sm:flex-col max-sm:gap-10 max-sm:px-5 max-sm:py-20"
    >
      <div className="sm:w-2/3 sm:p-20">
        <div className="mx-auto max-w-xl">
          <Title css={"mb-3"}>restons en contact</Title>
          <Text css={"mb-5"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis ad architecto, voluptas quidem ex fugit commodi
            reiciendis quod deleniti possimus deserunt veritatis earum natus
            reprehenderit aliquam totam, fugiat est voluptates?
          </Text>
          <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid grid-cols-2 gap-10">
              <div className="grid">
                <input
                  placeholder="Nom complet"
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                  className="border-b-2 border-primary bg-light bg-transparent py-1 outline-none placeholder:text-primary rounded-none"
                />
              </div>
              <div className="grid">
                <input
                  placeholder="Entreprise (facultatif)"
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="border-b-2 border-primary bg-light bg-transparent py-1 outline-none placeholder:text-primary rounded-none"
                />
              </div>
            </div>
            <div className="grid">
              <input
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-b-2 border-primary bg-light bg-transparent py-1 outline-none placeholder:text-primary rounded-none"
              />
            </div>
            <div className="grid">
              <textarea
                placeholder="Message"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={1}
                required
                className="border-b-2 border-primary bg-light bg-transparent py-1 outline-none placeholder:text-primary rounded-none"
              ></textarea>
            </div>
            <button type="submit" className="mt-2">
              <Button text={"Envoyer"} css={"bg-secondary text-sm"} />
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-5 bg-light p-10 sm:p-20 font-bold sm:w-1/3">
        <h2 className="text-3xl uppercase text-primary">infos</h2>
        <div className="flex items-center gap-5" data-aos="fade-left" data-aos-easing="ease-out" data-aos-delay="0">
          <img
            src="assets/images/phone.png"
            alt="Téléphone"
            className="h-6 w-6 select-none"
          />
          <p className="text-lg">{contact.phone}</p>
        </div>
        <div className="flex items-center gap-5" data-aos="fade-left" data-aos-easing="ease-out" data-aos-delay="100">
          <img
            src="assets/images/email.png"
            alt="Email"
            className="h-6 w-6 select-none"
          />
          <p className="text-lg">{contact.email}</p>
        </div>
        <div className="flex items-center gap-5" data-aos="fade-left" data-aos-easing="ease-out" data-aos-delay="200">
          <img
            src="assets/images/company.png"
            alt="Entreprise"
            className="h-6 w-6 select-none"
          />
          <p className="text-lg">{contact.company}</p>
        </div>
        <div className="flex items-center gap-5" data-aos="fade-left" data-aos-easing="ease-out" data-aos-delay="300">
          <img
            src="assets/images/pin.png"
            alt="Localisation"
            className="h-6 w-6 select-none"
          />
          <p className="text-lg">{contact.localisation}</p>
        </div>
      </div>
    </section>
  );
}
