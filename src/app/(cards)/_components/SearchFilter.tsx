"use client";
export default function SearchFilter() {
  const namesArray = [
    "attribute",
    "level",
    "play_cost",
    "evolution_cost",
    "cardrarity",
    "artist",
    "dp",
    "digi_type",
    "cardnumber",
    "maineffect",
    "soureeffect",
    "set_name",
    "card_sets",
  ];
  function capitalize(str: string) {
    return str
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  return (
    <div className="flex w-full flex-col bg-blue-200">
      <h1>Search Filter</h1>
      <form className="flex flex-wrap gap-2">
        {namesArray.map((name) => (
          <fieldset key={name}>
            <label htmlFor={name}>{capitalize(name)}</label>
            <input
              placeholder={capitalize(name)}
              name={name}
              id={name}
              type="text"
            />
          </fieldset>
        ))}
      </form>
    </div>
  );
}

/*
    attribute      String?
    level          Int?
    play_cost      Int?
    evolution_cost Int?
    cardrarity     String?
    artist         String?
    dp             Int?
    digi_type      String?
    cardnumber     String?
    maineffect     String?
    soureeffect    String?
    set_name       String?
    card_sets      String[]

 * */
