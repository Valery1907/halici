import Background from "../../img/AllPhoto/images.jpg";
import { navItems } from "../../utils/fakeDate";
import CardBlock from "./CardBlock/CardBlock";
import EsIsBlock from "./EsIsBlock";
import FooterBlock from "./FooterBlock";
import MapBlock from "./MapBlock";
import MitUnsBlock from "./MitUnsBlock";
import ResponseBlock from "./ResponseBlock";
import UnserTeam from "./UnserTeam";
import WerdenBlock from "./WerdenBlock";
import s from "./index.module.scss";
const BodyBlock = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className="flex justify-center ">
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
      <div id="galerie" className={s.werdenBlock5}>
        <WerdenBlock />
      </div>
      {/* <div className="flex justify-center mt-[82px]">
        <WerdenTeilBlock />
      </div> */}
      <div className={s.mapBlock7}>
        <ResponseBlock />
      </div>

      <div className={s.mapBlock7}>
        <MapBlock />
      </div>

      <div id="kontakte" className={s.footerBlock8}>
        <FooterBlock />
      </div>
    </div>
  );
};
export default BodyBlock;
