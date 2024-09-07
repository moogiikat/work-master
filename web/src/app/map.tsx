import React from "react";
import { MapPinIcon, PhoneCallIcon, MailIcon } from "lucide-react";

export const GoogleMapEmbed: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-x-5 gap-y-5">
      <iframe
        width="100%"
        height="100%"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Workmaster%20LLC,%20Энхтайвны%20Өргөн%20Чөлөө,%20ウランバートル&t=&z=13&ie=UTF8&iwloc=&output=embed"
        title="Google Map"
      ></iframe>
      <div className="flex flex-col gap-y-5">
        <p className="flex items-center gap-x-2">
          <MapPinIcon className="w-10" />
          {
            "MILLENIUM PLAZA 1305 тоот"
          }
        </p>
        <p className="flex items-center">
          <PhoneCallIcon className="w-10" />
          <a href="tel:+97699232628" className="ml-1">
            +97699232628
          </a>
        </p>
        <p className="flex items-center">
          <MailIcon className="w-10" />
          <a href="mailto:info@workmaster.mn" className="ml-1">
            info@workmaster.mn
          </a>
        </p>
      </div>
    </div>
  );
};

export default GoogleMapEmbed;
