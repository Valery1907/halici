import React from "react";

interface CardData {
  title: string;
  id: string;
  background: string;
  children: { itemName: string }[];
}

const CardBlock: React.FC<{ items: CardData[] }> = ({ items }) => {
  return (
    <div className="text-[24px] grid grid-cols-3 gap-40 flex flex-wrap max-w-[1711px]">
      {items.map((card) => (
        <div
          key={card.id}
          className="w-[342px] h-[371px] rounded-xl flex justify-center items-center mb-4 mr-4"
          style={{
            backgroundImage: `url("${card.background}")`,
            backgroundSize: "cover"
          }}
        >
          <div className="w-[260px] h-[315px] p-[20px] relative bg-[#EEEEEE] opacity-75 rounded-xl text-[24px]">
            {card.children.map((child, index) => (
              <div
                className="flex justify-start text-xl items-center"
                key={index}
              >
                <div className="w-[15px] h-[15px] rounded-full bg-[#C5D20D]"></div>
                <div className="ml-[13px]">{child.itemName}</div>
                <div className="absolute bottom-0 flex justify-center items-center h-[37px] rounded-b-xl left-0 w-full bg-white">
                  {card.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardBlock;
