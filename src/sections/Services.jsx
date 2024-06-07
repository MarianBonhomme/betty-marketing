import React from "react";
import Title from "../components/Title";
import Text from "../components/Text";
import Button from "../components/Button";
import InternalLink from "../components/InternalLink";
import { cmServices, photoServices } from '../utils/Services';

export default function Services() {
  return (
    <section id="services">
      <div className="max-w-responsive mx-auto p-20">
        <div className="relative mx-auto select-none">
          <Title css={"text-center absolute left-1/2 -translate-x-1/2"}>
            Mes services
          </Title>
          <img
            src="assets/images/ornement.svg"
            alt="décoration"
            className="mx-auto h-40"
          />
        </div>
        <div className="grid grid-cols-4 gap-10">
          <div className="relative flex items-center">
            <h3 className="text-3xl font-bold uppercase italic text-secondary">
              Community Management
            </h3>
            <img
              src="assets/images/ornement-3.svg"
              alt="décoration"
              className="absolute bottom-0 right-0 h-20 select-none"
            />
          </div>
          {cmServices.map((service, index) => (
            <Card>
              <img
                src={`assets/images/${service.image}`}
                alt={service.title}
                className="h-10 w-10 select-none"
              />
              <div>
                <h3 className="mb-2 text-lg/5 font-bold uppercase text-secondary">
                  {service.title}
                </h3>
                <Text>{service.description}</Text>
              </div>
              <span className="absolute bottom-0 right-0 flex h-7 w-10 select-none items-end justify-center bg-primary text-xl text-white">
                {`${(index + 1).toString().padStart(2, "0")}.`}
              </span>
            </Card>
          ))}
        </div>
        <InternalLink section={'contact'}>
          <Button
            text={"Booste ta présence en ligne"}
            css={"bg-secondary text-black font-bold text-sm mt-10 mx-auto"}
          ></Button>
        </InternalLink>
        <div className="mx-auto my-16 block h-[2px] w-10 bg-light select-none"></div>
        <div className="grid grid-cols-4 gap-10">
          <div className="relative flex items-center">
            <h3 className="text-3xl font-bold uppercase italic text-secondary">
              Graphisme /<br></br>Photos
            </h3>
            <img
              src="assets/images/ornement-3.svg"
              alt="décoration"
              className="absolute bottom-0 right-0 h-20 select-none"
            />
          </div>
          {photoServices.map((service, index) => (
            <Card>
              <img
                src={`assets/images/${service.image}`}
                alt={service.title}
                className="h-10 w-10 select-none"
              />
              <div>
                <h3 className="mb-2 text-lg/5 font-bold uppercase text-secondary">
                  {service.title}
                </h3>
                <Text>{service.description}</Text>
              </div>
              <span className="absolute bottom-0 right-0 flex h-7 w-10 select-none items-end justify-center bg-primary text-xl text-white">
                {`${(index + 1).toString().padStart(2, "0")}.`}
              </span>
            </Card>
          ))}
        </div>
        <InternalLink section={'contact'}>
          <Button
            text={"Transforme ton image dès maintenant!"}
            css={"bg-secondary text-black font-bold text-sm mt-10 mx-auto"}
          ></Button>
        </InternalLink>
      </div>
    </section>
  );
}

function Card({ children }) {
  return (
    <div className="shadow-card relative flex items-center gap-5 p-5 pb-8">{children}</div>
  );
}