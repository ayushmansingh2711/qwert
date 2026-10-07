import React from "react";
import YellowBYN from "./YellowBTN";
import LinkBTN from "./LinkBTN";
const CTA = () => {
  return (
    <>
      <section class=" bg-cover bg-center bg-no-repeat py-[3rem] px-[1rem] md:py-[6rem] text-center">
        <div class="max-w-4xl mx-auto">
          <h3 class="text-4xl font-bold mb-6 text-[#003366]">
            Ready to make your idea happen?
          </h3>
          <p class="text-xl pb-10 font-medium italic">
          Have you got a question? For any inquiries, reach out to our support team by clicking the button below.
          </p>
          <LinkBTN value={"Call Us"} link={"tel:+919251494002"}/>
        </div>
      </section>
    </>
  );
};

export default CTA;
