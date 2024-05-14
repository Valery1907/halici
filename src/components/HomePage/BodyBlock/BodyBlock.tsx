import React from "react";
import CardBlock from "./CardBlock/CardBlock";
import s from "./index.module.scss";
import { navItems } from "../../utils/fakeDate";
import MitUnsBlock from "./MitUnsBlock";
import EsIsBlock from "./EsIsBlock";
import UnserTeam from "./UnserTeam";
import WerdenBlock from "./WerdenBlock";
import WerdenTeilBlock from "./WerdenTeilBlock";
import ResponseBlock from "./ResponseBlock";
import MapBlock from "./MapBlock";
import FooterBlock from "./FooterBlock";
import Background from "../../img/AllPhoto/images.jpg";
const BodyBlock = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className="flex justify-center mt-[84px]">
        <CardBlock items={navItems} />
      </div>
      <div className="mt-[110px]">
        <MitUnsBlock />
      </div>
      <div className={s.esIstBlock3}>
        <EsIsBlock />
      </div>
      <div id="aboutUs" className={s.teamBlock4}>
        <UnserTeam />
      </div>
      <div className={s.werdenBlock5}>
        <WerdenBlock />
      </div>
      <div className="flex justify-center mt-[82px]">
        <WerdenTeilBlock />
      </div>
      <div className={s.mapBlock7}>
        <ResponseBlock />
      </div>

      <div className={s.mapBlock7}>
        <MapBlock />
      </div>

      <div className={s.footerBlock8}>
        <FooterBlock />
      </div>
    </div>
  );
};
export default BodyBlock;
