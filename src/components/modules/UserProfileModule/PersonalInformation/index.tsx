import LeftSection from "@/components/modules/UserProfileModule/PersonalInformation/leftSection";
import RightSection from "@/components/modules/UserProfileModule/PersonalInformation/rightSection";
import React from "react";

function PersonalInformation() {
  return (
    <div className="flex flex-row">
      <div className="flex h-fit w-full flex-col justify-center transition-all md:flex-row">
        <div className="mr-10 mt-7 flex items-start">
          <LeftSection />
        </div>
        <RightSection />
      </div>
    </div>
  );
}

export default PersonalInformation;
