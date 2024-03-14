"use client";
import { useState } from "react";
import {
  colors,
  attributes,
  levels,
  cardtypes,
  stages,
  playCosts,
  evoCosts,
  digiTypes,
} from "../misc/data";
export default function SearchFilter() {
  const [formData, setFormData] = useState({
      
    });

  return (
  <div className="w-full py-4"> 
    <form className="flex flex-col gap-4 items-center justify-center">
      <fieldset>
        <input
          className="outline-none px-2 py-1 text-lg w-96"
          placeholder="Card Name"
          name="name"
          type="text"
        />
      </fieldset>

      <div className="flex flex-wrap gap-2 items-center justify-center">
      <fieldset>
        <select className="cursor-pointer rounded bg-gray-100 px-2 py-1 outline-none">
          <option value=""  selected>
            Select Attribute
          </option>
          {attributes.map((attribute: string) => {
            return (
              <option className="capitalize" value={attribute} key={attribute}>
                {attribute}
              </option>
            );
          })}
        </select>
      </fieldset>
      <fieldset>
        <select className="cursor-pointer rounded bg-gray-100 px-2 py-1 outline-none">
          <option value=""  selected>
            Select Stage
          </option>
          {stages.map((stage: string) => {
            return (
              <option className="capitalize" value={stage} key={stage}>
                {stage}
              </option>
            );
          })}
        </select>
      </fieldset>

      <fieldset>
        <select className="cursor-pointer rounded bg-gray-100 px-2 py-1 outline-none">
          <option value=""  selected>
            Select Level
          </option>
          {levels.map((level: number) => {
            return (
              <option className="capitalize" value={level} key={level}>
                {level}
              </option>
            );
          })}
        </select>
      </fieldset>

      <fieldset>
        <select className="cursor-pointer rounded bg-gray-100 px-2 py-1 outline-none">
          <option value=""  selected>
            Select Cost
          </option>
          {playCosts.map((cost: number) => {
            return (
              <option className="capitalize" value={cost} key={cost}>
                {cost}
              </option>
            );
          })}
        </select>
      </fieldset>

      <fieldset>
        <select className="cursor-pointer rounded bg-gray-100 px-2 py-1 outline-none">
          <option value=""  selected>
            Select Primary Color
          </option>
          {colors.map((color: string) => {
            return (
              <option className="capitalize" value={color} key={color}>
                {color}
              </option>
            );
          })}
        </select>
      </fieldset>

      <fieldset>
        <select className="cursor-pointer rounded bg-gray-100 px-2 py-1 outline-none">
          <option value=""  selected>
            Select Secondary Color
          </option>
          {colors.map((color: string) => {
            return (
              <option className="capitalize" value={color} key={color}>
                {color}
              </option>
            );
          })}
        </select>
      </fieldset>

      <fieldset>
        <select className="cursor-pointer rounded bg-gray-100 px-2 py-1 outline-none">
          <option value=""  selected>
            Select Evolution Cost
          </option>
          {evoCosts.map((cost: number) => {
            return (
              <option className="capitalize" value={cost} key={cost}>
                {cost}
              </option>
            );
          })}
        </select>
      </fieldset>

      <fieldset>
        <select className="cursor-pointer rounded bg-gray-100 px-2 py-1 outline-none">
          <option value=""  selected>
            Select Card Type
          </option>
          {cardtypes.map((types: string) => {
            return (
              <option className="capitalize" value={types} key={types}>
                {types}
              </option>
            );
          })}
        </select>
      </fieldset>

      <fieldset>
        <select className="cursor-pointer rounded bg-gray-100 px-2 py-1 outline-none">
          <option value=""  selected>
            Select Type
          </option>
          {digiTypes.map((types: string) => {
            return (
              <option className="capitalize" value={types} key={types}>
                {types}
              </option>
            );
          })}
        </select>
      </fieldset>
      </div>
    </form>
    </div>
  );
}
