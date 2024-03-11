import { api } from "@/trpc/server.ts"
import Image from "next/image"
export default async function Cards(){
  const data = await api.card.getCards.query({limit:30, offset:0});
  return(
    <div>
      {
        data.cards
        ?
          <div>
            {data.cards.map((card: any) => {
              return(
              <div key={card.id} className="flex gap-2 items-center">
                  <Image src={`/images/${card.cardnumber}.jpg`} alt="card" width="120" height="220" /> 
                  <p>{card.name}</p>
              </div>
              )
            })}
          </div>
        :<>no data</>
      }
    </div>
  )
}


/*
 


 * */
