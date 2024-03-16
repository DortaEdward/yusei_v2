"use client"

import type { Card } from "@prisma/client"
import CardComponent from "./CardComponent"
import { useState } from "react"
import { CardOverview } from "./CardOverview"

type Props = {
  cards: Card[]
}

export default function CardContainer({ cards }: Props) {
  const [isActiveCard, setActiveCard] = useState<Card | null>(null);
  const [isVisable, setIsVisable] = useState<boolean>(false);
  return (
    <>
      {
        cards
          ?
          <div className="flex flex-wrap gap-1 w-full items-center justify-center flex-grow">
            {cards.map((card: Card) => {
              return (
                <CardComponent key={card.id} card={card} setActiveCard={setActiveCard} setIsVisable={setIsVisable} />
              )
            })}
          </div>
          : <>no data</>
      }
      <CardOverview
        card={isActiveCard}
        isVisable={isVisable}
        setIsVisable={setIsVisable}
        setActiveCard={setActiveCard}
      />
    </>
  )

}
