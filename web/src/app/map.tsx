import React from "react";

export const GoogleMapEmbed: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-x-5">
      <iframe
        width="100%"
        height="100%"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Workmaster%20LLC,%20Энхтайвны%20Өргөн%20Чөлөө,%20ウランバートル&t=&z=13&ie=UTF8&iwloc=&output=embed"
        title="Google Map"
      ></iframe>
      <div className="flex flex-col gap-y-2">
        <p>
          {
            " Хаяг: Баянзүрх дүүрэг, 3-р хороо, Токиогийн гудамж, MILLENIUM PLAZA 1305 тоот, Ulaanbaatar, Mongolia"
          }
        </p>
        <p>
          Утас: <a href="tel:+97699232628">+97699232628</a>
        </p>
        <p>
          И-мэйл:
          <a href="mailto:mailto:info@workmaster.mn">{" info@workmaster.mn"}</a>
        </p>
      </div>
    </div>
  );
};

export default GoogleMapEmbed;
