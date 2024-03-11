import { api } from "@/trpc/server"
import Image from "next/image"
import type { Card } from "@prisma/client";
import SearchFilter from "../_components/SearchFilter";

export default async function Cards(){
  const data = await api.card.getCards.query({limit:30, offset:0});
  return(
    <div className="flex flex-col gap-2 items-center justify-center w-full bg-red-300 relative">
      <SearchFilter />
      {
        data.cards
        ?
          <div className="flex flex-wrap gap-1 w-full items-center justify-center">
            {data.cards.map((card: Card) => {
              return(
              <div key={card.id} className="flex gap-2 items-center">
                  <Image src={`/images/${card.cardnumber}.jpg`} className="cursor-pointer" alt="card" width="160" height="260" /> 
              </div>
              )
            })}
          </div>
        :<>no data</>
      }
    </div>
  )
}


