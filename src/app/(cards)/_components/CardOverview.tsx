import type { Card } from "@prisma/client"
import Image from "next/image"
import { IconX } from "@tabler/icons-react";

type Props = {
  card: Card | null;
  isVisable: boolean;
  setIsVisable: (val: boolean) => void
  setActiveCard: (card: Card | null) => void
}

export function CardOverview({ card, isVisable, setIsVisable, setActiveCard }: Props) {
  function handleClick() {
    setIsVisable(false)
    setActiveCard(null)
  }
  const handleClickOut = (e) => {
    if (e.target.classList.contains('background_shadow')) {
      setIsVisable(false)
      setActiveCard(null)
    }
  }
  return (
    <>
      {
        isVisable &&
        <div className={"absolute w-full h-full z-10 bg-black/95 background_shadow cursor-pointer"} onClick={handleClickOut}>
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:w-[1150px] p-6 flex bg-gray-100 rounded-lg gap-4 modal cursor-default">
            <button
              type="button"
              className="p-2  outline-none font-medium rounded absolute top-2 right-2"
            >
              <IconX
                size={28}
                className="cursor-pointer "
                onClick={handleClick}
              />

            </button>
            <Image className="rounded-2xl" src={`/images/${card?.cardnumber}.jpg`} alt={`Image of ${card?.name}`} width="300" height="220" />
            <div className="w-[790px] h-full flex flex-col gap-1">
              <p className="text-2xl font-bold">{card?.name}</p>
              <div className="flex gap-2 ">
                <p className="font-semibold">Set: <span className="font-medium">{card?.set_name}</span></p>
                <p className="font-semibold">Card Number: <span className="font-medium">{card?.cardnumber}</span></p>
                <p className="font-semibold">Rarity: <span className="font-medium">{card?.cardrarity}</span></p>
              </div>
              <div className="flex gap-2 ">
                <p className="font-semibold">Card Type: <span className="font-medium">{card?.type}</span></p>
                <p className="font-semibold">Stage: <span className="font-medium">{card?.stage}</span></p>
              </div>
              <div className="flex gap-2 ">
                <p className="font-semibold">Attribute: <span className="font-medium">{card?.attribute}</span></p>
                <p className="font-semibold">Colors: <span className="font-medium">{card?.color}{card?.color && `/${card?.color}`}</span></p>
              </div>
              <div className="flex gap-2 ">
                <p className="font-semibold">Play Cost: <span className="font-medium">{card?.play_cost}</span></p>
                <p className="font-semibold">Digivole Cost: <span className="font-medium">{card?.evolution_cost}</span></p>
                <p className="font-semibold">Level: <span className="font-medium">{card?.level}</span></p>
              </div>
              <div className="flex gap-2 ">
                <p className="font-semibold">DP: <span className="font-medium">{card?.dp}</span></p>
                <p className="font-semibold">Type: <span className="font-medium">{card?.digi_type}</span></p>
              </div>
              <div className="gap-2 flex flex-col gap-1">
                <p className="font-semibold">Main Effect: <span className="font-medium">{card?.maineffect}</span></p>
                <p className="font-semibold">Source Effect: <span className="font-medium">{card?.soureeffect}</span></p>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}
