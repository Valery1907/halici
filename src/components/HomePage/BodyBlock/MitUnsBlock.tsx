import React from "react";
import { Diagram } from "../../img/Diagram";
import { Link } from "react-router-dom";

const MitUnsBlock: React.FC<{}> = () => {
  return (
    <div className=" text-[24px] flex flex-col justify-center items-center">
      <div className="text-[50px] w-[1146px] tracking-[3px] text-center text-[#323232] border-[#323232] border-b-[1px]">
        Mit uns geht es schnell und einfach
      </div>
      <div className="flex items-center w-full mt-[100px] justify-around">
        <div className="relative">
          <div className="absolute top-[200px] left-[100px]">
            <div className="text-[35px]">Erster Schritt</div>
            <div className="w-[365px] text-[20px]">
              Rufen Sie uns an oder stellen Sieeinfach hier eine Anfrage
              undvereinbaren Sie einen Termin.
            </div>
          </div>
          <div className="absolute right-[165px]">
            <div className="w-[365px] text-[20px]">
              {" "}
              Lassen Sie sich inspirieren von den unendlichen Möglichkeiten und
              Planungsideen unserer Einrichtungsprofis.
            </div>

            <div className="text-[35px]">Zweite Schritt</div>
          </div>
          <div className="absolute top-[200px] -right-[155px]">
            <div className="text-[35px]">Dritte Schritt</div>
            <div className="w-[365px] text-[20px] ">
              Lassen Sie sich einfach durch unsere Erfahrung, Motivation,
              Ideenreichtum, und Perfektion begeistern und erleben Sie, wie Ihr
              Wohntraum in ihren eigenen 4 Wänden zur Realität wird.
            </div>
          </div>
          <Diagram />
        </div>
        <div>
          <Link to="/form">
            <button className="w-[401px] h-[78px] text-[40px] bg-[#C5D20D] rounded-lg">
              Anfrage Stellen
            </button>
          </Link>
        </div>
      </div>
      {/* {items.map((card) => (
        <div
          key={card.id}
          className="w-[342px] h-[371px] bg-[#9b2c2c] rounded-xl flex justify-center items-center mb-4 mr-4"
        >
          <div className="w-[260px] h-[315px]  p-[20px] relative bg-[#EEEEEE] opacity-75 rounded-xl text-[24px]">
            {card.children.map((child, index) => (
              <div className="flex justify-start text-xl items-center">
                <div className="w-[15px] h-[15px] rounded-full bg-[#C5D20D]"></div>
                <div key={index} className="ml-[13px]">
                  {child.itemName}
                </div>
                <div className="absolute bottom-0 flex justify-center items-center h-[37px] rounded-b-xl left-0 w-full bg-white">
                  {card.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default MitUnsBlock;
