import React from "react";
import bgLeft from "../assets/images/desktop/image-graphic-design.jpg";
import bgRigft from "../assets/images/desktop/image-photography.jpg";

const SectionThree = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div
        style={{
          backgroundImage: `url(${bgLeft})`,
        }}
        className="bg-cover lg:pt-[15rem] lg:pb-[5rem] lg:px-[10rem] pt-[5rem] pb-[2rem] px-[3rem] text-center"
      >
        <h3 className="mb-[3rem] font-bold text-3xl mt-[10rem]">
          Graphic design
        </h3>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </div>

      <div
        style={{
          backgroundImage: `url(${bgRigft})`,
        }}
        className=" bg-cover lg:pt-[15rem] lg:pb-[5rem] lg:px-[10rem] pt-[5rem] pb-[2rem] px-[3rem] text-center"
      >
        <h3 className="mb-[3rem] font-bold text-3xl mt-[10rem]">Photography</h3>
        <p>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </div>
  );
};

export default SectionThree;
