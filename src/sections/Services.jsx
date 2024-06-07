import React from "react";
import Title from "../components/Title";
import Text from "../components/Text";
import Button from "../components/Button";
import InternalLink from "../components/InternalLink";
import { cmServices, photoServices } from "../utils/Services";

export default function Services() {
  return (
    <section id="services">
      <div className="max-w-responsive mx-auto px-5 py-20 sm:p-20">
        <div className="relative mx-auto select-none max-sm:pt-8">
          <Title css={"text-center absolute top-0 left-1/2 -translate-x-1/2"}>
            Mes services
          </Title>
          <img
            src="assets/images/ornement.svg"
            alt="décoration"
            className="mx-auto h-40"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-4 sm:gap-10">
          <div className="relative flex items-center">
            <h3 className="text-3xl font-bold uppercase italic text-secondary">
              Community Management
            </h3>
            <img
              src="assets/images/ornement-3.svg"
              alt="décoration"
              className="absolute bottom-0 right-0 h-16 sm:h-20 select-none"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-anchor-placement="center-center"
            />
          </div>
          {cmServices.map((service, index) => (
            <Card key={index}>
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
        <InternalLink section={"contact"}>
          <Button
            text={"Booste ta présence en ligne"}
            css={
              "bg-secondary text-black font-bold text-sm mt-5 sm:mt-10 mx-auto"
            }
          ></Button>
        </InternalLink>
        <div className="mx-auto my-16 block h-[2px] w-10 select-none bg-light max-sm:hidden"></div>
        <div className="mt-20 grid gap-5 sm:grid-cols-4 sm:gap-10">
          <div className="relative flex items-center">
            <h3 className="text-3xl font-bold uppercase italic text-secondary">
              Graphisme /<br></br>Photos
            </h3>
            <img
              src="assets/images/ornement-3.svg"
              alt="décoration"
              className="absolute bottom-0 right-0 h-16 sm:h-20 select-none"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-anchor-placement="center-center"
            />
          </div>
          {photoServices.map((service, index) => (
            <Card key={index}>
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
        <InternalLink section={"contact"}>
          <Button
            text={"Transforme ton image dès maintenant!"}
            css={
              "bg-secondary text-black font-bold text-sm mt-5 sm:mt-10 mx-auto"
            }
          ></Button>
        </InternalLink>
      </div>
    </section>
  );
}

function Card({ children }) {
  return (
    <div className="shadow-card relative flex items-center gap-5 p-5 pb-8">
      {children}
    </div>
  );
}
