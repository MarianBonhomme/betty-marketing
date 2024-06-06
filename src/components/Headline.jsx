import React from "react";
import Button from "./Button";
import Title from "./Title";
import Text from "./Text";

export default function Headline() {
  return (
    <div className="grid grid-cols-2 items-center gap-10 p-20">
      <div className="flex flex-col gap-5">
        <Title>Développe tes réseaux-sociaux et améliore ta notoriété</Title>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          ad architecto, voluptas quidem ex fugit commodi reiciendis quod
          deleniti possimus deserunt veritatis earum natus reprehenderit aliquam
          totam, fugiat est voluptates?
        </Text>
        <Button text={"en savoir plus"} css={"mt-2"} />
      </div>
      <div className="h-[400px] w-full border border-dark"></div>
    </div>
  );
}
