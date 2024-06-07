import React from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import Text from "../components/Text";
import InternalLink from "../components/InternalLink";

export default function Headline() {
  return (
    <section id="headline">
      <div className="max-w-responsive mx-auto grid sm:grid-cols-2 items-center gap-10 py-20 px-10 sm:p-20">
        <div className="flex flex-col gap-5">
          <Title>développons ensemble votre succès en ligne</Title>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis ad architecto, voluptas quidem ex fugit commodi
            reiciendis quod deleniti possimus deserunt veritatis earum natus
            reprehenderit aliquam totam, fugiat est voluptates?
          </Text>
          <InternalLink section={"services"}>
            <Button text={"en savoir plus"} css={"bg-secondary mt-2"} />
          </InternalLink>
        </div>
        <div className="max-sm:hidden h-[400px] w-full border border-dark"></div>
      </div>
    </section>
  );
}
