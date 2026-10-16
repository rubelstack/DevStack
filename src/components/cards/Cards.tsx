import { use, useState } from "react";
import type { Technology } from "../../type";
import Card from "../card/Card.tsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CardProps {
  cardPromise: Promise<Technology[]>;
}

function Cards({ cardPromise }: CardProps) {
  const cardData = use(cardPromise);
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);

  const addTechnology = (technology: Technology) => {
   
      setSelectedTechnologies([...selectedTechnologies, technology]);
      toast.success("Added{} to your stack!");
    
  };

  const removeTechnology = (id: string) => {
    const newTechnologies = selectedTechnologies.filter(
      (technology) => technology.id !== id
    );
    setSelectedTechnologies(newTechnologies);
    toast.info("Removed from your stack!");
  };

  const removeAll = () => {
    if (selectedTechnologies.length > 0) {
      const newTechnologies: Technology[] = [];
      setSelectedTechnologies(newTechnologies);
      toast.success("All technologies removed!");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-8 container mx-auto px-4">

      <ToastContainer position="top-right" autoClose={2000} />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-4.75 justify-items-center">

        {cardData.map((technology) => (
          <Card
            key={technology.id}
            cardData={technology}
            onAdd={() => addTechnology(technology)}
            isSelected={selectedTechnologies.some(
              (item) => item.id === technology.id
            )}
          />
        ))}

      </div>

      <aside className="w-[280px] h-auto border border-slate-200 rounded-3xl bg-white p-6 shrink-0">

        <h2 className="text-[#0F172A] font-bold text-3xl">Your Stack</h2>

        <p className="text-[#94A3B8] text-lg mt-1 mb-7">
          {selectedTechnologies.length} Technology Selected
        </p>

        <div className="flex flex-col gap-2.5">
          {selectedTechnologies.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 border-2 border-slate-200 rounded-2xl px-3 py-2"
            >
              <img
                className="w-4 h-[21px] object-contain"
                src={technology.icon}
                alt={technology.name}
              />

              <div>
                <h3 className="font-bold text-[#0F172A]">{technology.name}</h3>
                <p className="text-sm text-[#94A3B8]">{technology.category}</p>
              </div>

              <button
                onClick={() => removeTechnology(technology.id)}
                className="ml-auto text-slate-400 text-3xl"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={removeAll}
          disabled={selectedTechnologies.length === 0}
          className="w-full border border-[#FCA5A5] text-[#EF3024] disabled:opacity-50 rounded-2xl py-3 font-bold text-xl mt-6"
        >
          Remove All
        </button>

      </aside>

    </div>
  );
}

export default Cards;
