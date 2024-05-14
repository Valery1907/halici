import React, { useEffect } from "react";

declare global {
  interface Window {
    google: any;
  }
}

const MapBlock: React.FC<{}> = () => {
  useEffect(() => {
    const initMap = () => {
      const locations = [
        {
          address: "Taborstraße 64, 1020 Wien, Austria",
          position: { lat: 48.2179, lng: 16.3868 },
          title: "Taborstraße 64",
        },
        {
          address: "Laudongasse 34, 1080 Wien, Austria",
          position: { lat: 48.2121, lng: 16.3561 },
          title: "Laudongasse 34",
        },
        {
          address: "Hauptstraße 46, 2340 Mödling, Austria",
          position: { lat: 48.1099, lng: 16.3138 },
          title: "Hauptstraße 46",
        },
      ];

      const map = new window.google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          zoom: 13,
          center: locations[0].position,
        }
      );

      locations.forEach((location) => {
        new window.google.maps.Marker({
          position: location.position,
          map: map,
          title: location.title,
        });
      });
    };

    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.async = true;
      document.body.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  return (
    <div className="text-[24px] flex flex-col mt-[200px] justify-center items-center">
      <div className="text-[50px] w-[1140px] text-center text-[#323232] border-[#323232] border-b-[1px]">
        HALICI Raumasstattung GmbH
      </div>
      <div className="mt-[76px] w-full bg-black"></div>
      <div id="map" style={{ height: "400px", width: "100%" }}></div>
    </div>
  );
};

export default MapBlock;
