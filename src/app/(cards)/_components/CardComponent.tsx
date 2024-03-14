import type { Card } from "@prisma/client"
import Image from "next/image"

type Props = {
  card: Card;
  setActiveCard: (card: Card) => void;
  setIsVisable: (val: boolean) => void;
}

export default function CardComponent({card, setActiveCard, setIsVisable}: Props){
  function handleClick(){
    setActiveCard(card);
    setIsVisable(true)
    }
  return(
              <>
                  <Image 
                    src={`/images/${card.cardnumber}.jpg`}
                    className="cursor-pointer rounded-md hover:scale-110 transition ease-in-out duration-300"
                    alt={`Image of ${card.name}`}
                    onClick={handleClick}
                    width="160" height="260"
                    /> 
              </>
  )
  }
