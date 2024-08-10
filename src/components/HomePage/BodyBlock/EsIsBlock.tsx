import React from "react";
import TeamImage from "../../img/TeamImg/image.png";

const EsIsBlock: React.FC<{}> = () => {
  return (
    <div className="w-full  text-[24px] flex flex-col mt-[200px] justify-center items-center">
      <div className="text-[50px] w-[1146px] text-center tracking-[3px] text-[#323232] border-[#323232] border-b-[1px]">
        Es ist an der Zeit, einander kennen zu lernen
      </div>
      <div className="w-full flex justify-around mt-[63px]">
        <div className="w-6/12 text-[20px] w-[717px]">
          Es wächst zusammen, was zusammengehört - herzlich willkommen im
          Küche&Co Studio Wien-Josefstadt und Wien-Leopoldstadt! In unseren
          beiden Studios in Wien bieten wir nicht nur inspirierende Küchenideen,
          sondern auch umfassende Lösungen für die Renovierung Ihrer Badezimmer,
          gemeinsam mit unserem Partner — Viterma- Badsanierung Mödling. Dank
          unserer Partnerschaft mit Viterma, können wir Ihnen hochwertige
          Badezimmerrenovierungen anbieten, die durch Qualität und Innovation
          überzeugen und Sie begeistern werden. Dank jahrelanger Erfahrung und
          einem starken Team, stehen wir für Stabilität und Vertrauen. Unser
          Ideenreichtum kennt keine Grenzen - lassen Sie sich von unseren
          kreativen Konzepten inspirieren und gemeinsam gestalten wir Ihre
          Traumküche oder Ihr persönliches Wohlfühlbad. Wir bieten Ihnen alles
          aus einer Hand, denn nur so entsteht Harmonie und Perfektion.
          Entdecken Sie die Synergie von Küchen und Bädern unter einem Dach und
          vertrauen Sie auf unsere Kompetenz. Gönnen Sie sich das Vergnügen
          einer neuen Küche oder eines renovierten Badezimmers. Denn manchmal
          ist das Beste einfach naheliegend.
        </div>
        <div className="w-6/12 flex justify-between flex-col">
          <div>
            <img
              src={TeamImage}
              alt="Description of the image"
              className="w-[823px] h-[426px]"
            />
          </div>
          <div className="flex justify-between w-[823px] mt-[50px]">
            <div className="w-[120px] text-center">
              <div className="blur"></div>
              <div className="text-[35px]">3000</div>

              <div className="text-[25px]">Zufriedene Kunden</div>
            </div>
            <div className="w-[120px] text-center">
              <div className="text-[35px]">3D</div>
              <div className="text-[25px]">Planung</div>
            </div>
            <div className="w-[100px] text-center text-[25px]">
              Profi-Beratung Gratis
            </div>
            <div className="w-[100px] text-center text-[25px]">
              24/7 mit Ihnen
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EsIsBlock;
