"use client";

import PersonalInformation from "@/components/modules/UserProfileModule/PersonalInformation";
import ProfileCommonFeature from "./ProfileCommonFeature";

function UserProfileModule() {
  return (
    <div className="container px-5 py-5 md:px-[60px] md:py-16">
      <div className="flex flex-col gap-14">
        <div className="px-2 py-0">
          <PersonalInformation />
        </div>
        <div>
          <ProfileCommonFeature />
        </div>
      </div>
    </div>
  );
}

export default UserProfileModule;
