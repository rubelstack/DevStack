import type { Technology } from "../../type.tsx";

interface CardProps {
  cardData: Technology;
  onAdd: () => void;
  isSelected: boolean;
}

function Card({ cardData, onAdd, isSelected }: CardProps) {
  return (
    (
      <div className="flex justify-center w-[288px] h-71.25 border border-gray-200 rounded-lg">
        <div className="w-61.5 h-full">
          <div className="flex justify-between items-center h-10 mt-5">
            <img
              height={40}
              width={40}
              src={cardData.icon}
              alt={cardData.name}
            />

            {/* Mobile name */}
            <h2 className="text-[#0F172A] lg:hidden">{cardData.name}</h2>

            <h2
              className="rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap"
              style={{
                backgroundColor: cardData.badgeBg,
                color: cardData.badgeColor,
              }}
            >
              {cardData.badge}
            </h2>
          </div>

          <div className="">
            <h2 className=" hidden lg:block mt-3 text-[#0F172A] font-bold text-[18px]">
              {cardData.name}
            </h2>
            <p className="text-[12px] mt-1.5">{cardData.description}</p>
            <div className="mt-3 w-61.5 h-7.5 flex justify-between items-center text-center">
              <p className="w-16 h-5.25 bg-[#F1F5F9] text-[#475569] rounded-md font-medium flex justify-center text-center items-center text-[11px]">
                {cardData.category}
              </p>
              <p className="text-[#64748B]  font-medium text-[11px]">
                {cardData.difficulty}
              </p>
              <div className="flex justify-center items-center text-center">
                <svg
                  className="w-2.25 h-2.25 text-[#FBBF24]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>

                <p className="font-semibold text-[11px] text-[#334155]">
                  {cardData.rating}
                </p>
              </div>
            </div>
            <div>
              <button onClick={onAdd} disabled={isSelected} className="bg-[#0A0F1D] disabled:bg-slate-400 w-61.5 h-9 text-white text-[12px] p-2.5 rounded-md mt-4 ">
                {isSelected ? "Added To Stack" : "Add To Stack"}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Card;
