import { api } from "@/trpc/server"
import SearchFilter from "../_components/SearchFilter";
import CardContainer from "../_components/CardContainer";

export default async function Cards() {

  const data = await api.card.getCards.query({ limit: 30, offset: 0 });

  return (
    <div className="flex flex-col gap-2 items-center justify-center w-full relative flex-grow">
      <SearchFilter />
      <CardContainer cards={data.cards} />
    </div>
  )
}

