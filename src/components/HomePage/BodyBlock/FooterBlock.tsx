import React from "react";
// import "swiper/swiper-bundle.min.css";
import { EmailIcon } from "../../img/EmailIcon";
import { InstaIcon } from "../../img/InstaIcon";
import { PhoneIcon } from "../../img/PhoneIcon";
import Kuche from "../../img/image copy.png";
import Viterma from "../../img/image.png";

// SwiperCore.use([Pagination]);

// const formSubroOrgSchema = z.object({
//   organizationName: z.string().min(1, "miss Name"),
//   email: z.string().email(),
//   password: z.string().min(8).max(100),
// });
const FooterBlock: React.FC<{}> = () => {
  const teamMembers = [
    { item: "Team Member 1" },
    { item: "Team Member 2" },
    { item: "Team Member 3" }
  ];

  return (
    <div className="w-full text-[24px] flex flex-col mt-[50px] justify-center items-center">
      <div className="text-[30px] w-[658px] text-center text-[#323232] border-[#323232] border-b-[1px]">
        Unsere Studios
      </div>
      <div className="w-full flex flex-col items-center justify-around">
        <div className="flex mt-[47px] w-full justify-around px-[240px]">
          <div>
            <div>Küche&Co Wien-Leopoldstadt</div>
            <div className="underline">Taborstraße 64, 1020 Wien</div>
          </div>
          <div>
            <div>Küche&Co Wien-Josefstadt</div>
            <div className="underline">Laudongasse 34, 1080 Wien</div>
          </div>
          <div>
            <div>Viterma Badsanierung</div>
            <div className="underline">Hauptstraße 46, 2340 Mödling</div>
          </div>
        </div>
        <div className="flex mt-[77px] w-full justify-around ">
          <div>
            <div className="text-[30px] justify-center flex text-[#323232] border-[#323232] border-b-[1px]">
              Kontakte
            </div>
            <div className="h-[295px] justify-around flex flex-col ">
              <div className="flex items-center">
                <div className="rounded-full bg-[#C5D20D] w-[56px] h-[56px] mr-5 flex justify-center items-center">
                  <PhoneIcon />
                </div>
                +436508620278
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-[#C5D20D] w-[56px] h-[56px] mr-5 flex justify-center items-center">
                  <EmailIcon />
                </div>
                office@halici.at
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-[#C5D20D] w-[56px] h-[56px] mr-5 flex justify-center items-center">
                  <InstaIcon />
                </div>
                http://surl.li/qczcs
              </div>
            </div>
          </div>
          <div>
            <div className="justify-around justify-center flex   text-[30px] text-[#323232] border-[#323232] border-b-[1px]">
              Öffnungszeiten
            </div>
            <div className="h-[295px] justify-around flex flex-col ">
              <div>Mo-Fr : 9:30-18:00</div>
              <div>Samstag - geschlossen</div>
              <div>Sonntag - geschlossen</div>
            </div>
          </div>
          <div>
            <div className=" text-[30px] justify-center flex  text-[#323232] border-[#323232] border-b-[1px]">
              Firma Info
            </div>
            <div className="h-[295px] justify-start flex flex-col ">
              <div className="mt-[40px]">FN 479003 t</div>

              <div className="mt-[40px]">ATU72799625</div>
            </div>
          </div>
        </div>
        <div className=" mt-[47px] w-full flex flex-col items-center justify-center">
          <div className="text-[50px] flex justify-center w-[444px] text-[#323232]  border-[#323232] border-b-[1px]">
            Unsere Partners
          </div>
          <div className="mt-[52px] flex justify-around w-full">
            <div>
              <img
                src={Viterma}
                alt="Description of the image"
                className="w-[172px] h-[159px]"
              />
            </div>
            <img
              src={Kuche}
              alt="Description of the image"
              className="w-[350px] h-[94px]"
            />
          </div>
        </div>
      </div>

      {/* <div className="text-[50px] mt-[67px] text-[#323232] border-[#323232] border-b-[1px]">
        Unsere Partner
      </div>
      <div>
        <div></div>
        <div></div>
      </div> */}
    </div>
  );
};

export default FooterBlock;
