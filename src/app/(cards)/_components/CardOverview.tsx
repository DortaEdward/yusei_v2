import type { Card } from "@prisma/client"

type Props = {
  card: Card | null;
  isVisable: boolean;
  setIsVisable: (val: boolean)=>void
  setActiveCard: (card: Card | null) => void
}

export function CardOverview({card, isVisable, setIsVisable, setActiveCard}: Props){
  function handleClick(){
    setIsVisable(false)
    setActiveCard(null)
    }
  return(
  <>
    {
     isVisable && 
    <div className={"absolute top-20 left-0 z-10 bg-red-500 w-full p-6"}> 
      <button 
        type="button" 
        className="p-2 bg-blue-400 rounded"
        onClick={handleClick}>Close</button>
      {JSON.stringify(card)}
    </div>
    }
  </>
  )
  }
