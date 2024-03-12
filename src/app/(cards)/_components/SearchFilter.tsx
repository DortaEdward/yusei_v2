"use client";
import { useState } from "react"
export default function SearchFilter() {
  const [formData, setFormData] = useState();

  const colors = ["red", "blue", "yellow", "green", "white", "black", "purple"]
  const attributes = ["data", "vaccine", "free", "virus", "variable"]
  const levels = [2, 3, 4, 5, 6, 7]
  const cardtypes = ["digimon", "digi-egg", "option", "tamer"]
  const stages = ["armor form", "baby", "champion", "d-reaper", "hybrid", "in-training", "mega", "rookie", "ultimate"]
  const playCosts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  const evoCosts = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  const digiTypes = ["Select Digi-Type", "9000",
    "AA Defense Agent",
    "Abadin Electronics",
    "Ability Synthesis Agent",
    "Abnormal",
    "Alien",
    "Alien Humanoid",
    "Amphibian",
    "Ancient",
    "Ancient Animal",
    "Ancient Aquabeast",
    "Ancient Bird",
    "Ancient Birdkin",
    "Ancient Crustacean",
    "Ancient Dragon",
    "Ancient Dragonkin",
    "Ancient Fairy",
    "Ancient Fish",
    "Ancient Holy Warrior",
    "Ancient Insectoid",
    "Ancient Mineral",
    "Ancient Mutant",
    "Ancient Mythical Beast",
    "Ancient Plant",
    "Android",
    "Angel",
    "Animal",
    "Ankylosaur",
    "Aquabeast",
    "Aquatic",
    "Archangel",
    "Armor",
    "Authority",
    "Avatar",
    "Avian",
    "Baby Dragon",
    "Base Defense Agent",
    "Beast",
    "Beast Dragon",
    "Beast Knight",
    "Beastkin",
    "Bird",
    "Bird Dragon",
    "Birdkin",
    "Blue Flare",
    "Boss",
    "Bulb",
    "Carnivorous Plant",
    "Ceratopsian",
    "Cherub",
    "Commander Agent",
    "Composite",
    "Composition",
    "CRT",
    "Crustacean",
    "Cyborg",
    "D-Brigade",
    "Dark Animal",
    "Dark Dragon",
    "Dark Knight",
    "Demon",
    "Demon Lord",
    "Deva",
    "DigiPolice",
    "Dinosaur",
    "Dominion",
    "Dragon",
    "Dragon Warrior",
    "Dragonkin",
    "Earth Dragon",
    "Enhancement",
    "Espionage Agent",
    "Evil",
    "Evil Dragon",
    "Fairy",
    "Fallen Angel",
    "Fire",
    "Fire Dragon",
    "Flame",
    "Food",
    "Four Great Dragons",
    "Four Sovereigns",
    "Galaxy",
    "General",
    "Ghost",
    "Giant Bird",
    "God Beast",
    "Grappling Agent",
    "Ground Combat Agent",
    "Holy Beast",
    "Holy Bird",
    "Holy Dragon",
    "Holy Sword",
    "Holy Warrior",
    "Hunter",
    "Ice-Snow",
    "Icy",
    "Insectoid",
    "Intel Acquisition Agent",
    "Invader",
    "Larva",
    "LCD",
    "Legend-Arms",
    "Lesser",
    "LIBERATOR",
    "Light Dragon",
    "Light Fang",
    "Machine",
    "Machine Dragon",
    "Magic Knight",
    "Magic Warrior",
    "Major",
    "Mammal",
    "Marine Man",
    "Mine",
    "Mineral",
    "Mini Angel",
    "Mini Bird",
    "Mini Dragon",
    "Minor",
    "Mollusk",
    "Monk",
    "Mothership Agent",
    "Musical Instrument",
    "Mutant",
    "Mysterious Beast",
    "Mysterious Bird",
    "Mythical",
    "Mythical Animal",
    "Mythical Beast",
    "Mythical Dragon",
    "Night Claw",
    "NO DATA",
    "Parasite",
    "Perfect",
    "Pixie",
    "Plesiosaur",
    "Principality",
    "Puppet",
    "Rare Animal",
    "Reconnaissance Agent",
    "Reptile",
    "Reptile Man",
    "Rock",
    "Rock Dragon",
    "Royal Knight",
    "Sea Animal",
    "Sea Beast",
    "Seraph",
    "Seven Great Demon Lords",
    "Shaman",
    "Skeleton",
    "Sky Dragon",
    "SoC",
    "Super Major",
    "Tathāgata",
    "Ten Warriors",
    "Three Great Angels",
    "Throne",
    "Tropical Fish",
    "Twilight",
    "Unanalyzable",
    "Undead",
    "Unidentified",
    "Unique",
    "Unknown",
    "Vegetation",
    "Virtue",
    "Warrior",
    "Weapon",
    "Wizard",
    "X Antibody",
    "Xros Heart",]


  return (
    <form className="flex">
      <fieldset>
        <label htmlFor="attribute">Attribute</label>
        <select>
          {
            attributes.map((attribute: string) => {
              return(
                <option value={attribute} key={attribute}>{attribute}</option>
              )
            })
          }
        </select>
      </fieldset>

      <fieldset>
        <label htmlFor="level">Level</label>
        <select>
          {
            levels.map((level: number) => {
              return(
                <option value={level} key={level}>{level}</option>
              )
            })
          }
        </select>
      </fieldset>

      <fieldset>
        <label htmlFor="play_cost">Play Cost</label>
        <select>
          {
            playCosts.map((cost: string) => {
              return(
                <option value={cost} key={cost}>{cost}</option>
              )
            })
          }
        </select>
      </fieldset>

      <fieldset>
        <label htmlFor="evolution_cost">Evolution Cost</label>
        <select>
          {
            evoCosts.map((cost: string) => {
              return(
                <option value={cost} key={cost}>{cost}</option>
              )
            })
          }
        </select>
      </fieldset>

      <fieldset>
        <label htmlFor="digi_type">Digi Type</label>
        <select>
          {
            digiTypes.map((types: string) => {
              return(
                <option value={types} key={types}>{types}</option>
              )
            })
          }
        </select>
      </fieldset>

      <fieldset>
        <label htmlFor="maineffect">Main Effect</label>
        <input placeholder="Main Effect" name="maineffect" id="maineffect" type="text" />
      </fieldset>

      <fieldset>
        <label htmlFor="soureeffect">Source Effect</label>
        <input placeholder="Source Effect" name="soureeffect" id="soureeffect" type="text" />
      </fieldset>

      <fieldset>
        <label htmlFor="set_name">Set Name</label>
        <select>
          <option>Get Sets</option>
        </select>
      </fieldset>
    </form>
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

<select class="form-control" id="filter-digitype" onchange="if (!window.__cfRLUnblockHandlers) return false; searchAPI()">

"Select Digi-Type</option>
"9000</option>"AA Defense Agent</option>"Abadin Electronics</option>"Ability Synthesis Agent</option>"Abnormal</option>"Alien</option>"Alien Humanoid</option><option>Amphibian</option><option>Ancient</option><option>Ancient Animal</option><option>Ancient Aquabeast</option><option>Ancient Bird</option><option>Ancient Birdkin</option><option>Ancient Crustacean</option><option>Ancient Dragon</option><option>Ancient Dragonkin</option><option>Ancient Fairy</option><option>Ancient Fish</option><option>Ancient Holy Warrior</option><option>Ancient Insectoid</option><option>Ancient Mineral</option><option>Ancient Mutant</option><option>Ancient Mythical Beast</option><option>Ancient Plant</option><option>Android</option><option>Angel</option><option>Animal</option><option>Ankylosaur</option><option>Aquabeast</option><option>Aquatic</option><option>Archangel</option><option>Armor</option><option>Authority</option><option>Avatar</option><option>Avian</option><option>Baby Dragon</option><option>Base Defense Agent</option><option>Beast</option><option>Beast Dragon</option><option>Beast Knight</option><option>Beastkin</option><option>Bird</option><option>Bird Dragon</option><option>Birdkin</option><option>Blue Flare</option><option>Boss</option><option>Bulb</option><option>Carnivorous Plant</option><option>Ceratopsian</option><option>Cherub</option><option>Commander Agent</option><option>Composite</option><option>Composition</option><option>CRT</option><option>Crustacean</option><option>Cyborg</option><option>D-Brigade</option><option>Dark Animal</option><option>Dark Dragon</option><option>Dark Knight</option><option>Demon</option><option>Demon Lord</option><option>Deva</option><option>DigiPolice</option><option>Dinosaur</option><option>Dominion</option><option>Dragon</option><option>Dragon Warrior</option><option>Dragonkin</option><option>Earth Dragon</option><option>Enhancement</option><option>Espionage Agent</option><option>Evil</option><option>Evil Dragon</option><option>Fairy</option><option>Fallen Angel</option><option>Fire</option><option>Fire Dragon</option><option>Flame</option><option>Food</option><option>Four Great Dragons</option><option>Four Sovereigns</option><option>Galaxy</option><option>General</option><option>Ghost</option><option>Giant Bird</option><option>God Beast</option><option>Grappling Agent</option><option>Ground Combat Agent</option><option>Holy Beast</option><option>Holy Bird</option><option>Holy Dragon</option><option>Holy Sword</option><option>Holy Warrior</option><option>Hunter</option><option>Ice-Snow</option><option>Icy</option><option>Insectoid</option><option>Intel Acquisition Agent</option><option>Invader</option><option>Larva</option><option>LCD</option><option>Legend-Arms</option><option>Lesser</option><option>LIBERATOR</option><option>Light Dragon</option><option>Light Fang</option><option>Machine</option><option>Machine Dragon</option><option>Magic Knight</option><option>Magic Warrior</option><option>Major</option><option>Mammal</option><option>Marine Man</option><option>Mine</option><option>Mineral</option><option>Mini Angel</option><option>Mini Bird</option><option>Mini Dragon</option><option>Minor</option><option>Mollusk</option><option>Monk</option><option>Mothership Agent</option><option>Musical Instrument</option><option>Mutant</option><option>Mysterious Beast</option><option>Mysterious Bird</option><option>Mythical</option><option>Mythical Animal</option><option>Mythical Beast</option><option>Mythical Dragon</option><option>Night Claw</option><option>NO DATA</option><option>Parasite</option><option>Perfect</option><option>Pixie</option><option>Plesiosaur</option><option>Principality</option><option>Puppet</option><option>Rare Animal</option><option>Reconnaissance Agent</option><option>Reptile</option><option>Reptile Man</option><option>Rock</option><option>Rock Dragon</option><option>Royal Knight</option><option>Sea Animal</option><option>Sea Beast</option><option>Seraph</option><option>Seven Great Demon Lords</option><option>Shaman</option><option>Skeleton</option><option>Sky Dragon</option><option>SoC</option><option>Super Major</option><option>Tathāgata</option><option>Ten Warriors</option><option>Three Great Angels</option><option>Throne</option><option>Tropical Fish</option><option>Twilight</option><option>Unanalyzable</option><option>Undead</option><option>Unidentified</option><option>Unique</option><option>Unknown</option><option>Vegetation</option><option>Virtue</option><option>Warrior</option><option>Weapon</option><option>Wizard</option><option>X Antibody</option><option>Xros Heart</option>
?&gt;
</select>


 * */
