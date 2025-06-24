import React from "react";
import { RatingStars } from "../../../../Components/Card/RatingCard";

const Filter = () => {
  return (
    <div className="px-12">
      <div className="flex flex-row justify-between my-3">
        <h3 className="text-2xl font-semibold text-[var(--darkGrey)]">
          Property Filter
        </h3>
        <p className="text-xl font-medium text-[var(--orange)]">Reset all</p>
      </div>
      <div>
        <h2 className="text-[26px] font-semibold text-[var(--darkGrey)]">
          Sort by
        </h2>
        <div>
          {" "}
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1"> I have a bike</label>
        </div>
        <div>
          {" "}
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1"> I have a bike</label>
        </div>
      </div>
      <h2 className="text-[26px] font-semibold text-[var(--darkGrey)]">
        Rating
      </h2>
      <RatingStars color="#DFB300" />
      <div className="flex flex-row my-3 gap-x-2">
        <button className="border rounded-[5px] text-white bg-[var(--orange)] text-lg flex justify-center items-center font-medium  px-12 py-2">
          Waiting
        </button>
        <button className="border rounded-[5px] text-[var(--orange)] bg-white text-lg flex justify-center items-center font-medium   px-12 py-2">
          Service
        </button>
      </div>
      <div>
        <h2 className="text-[26px] font-semibold text-[var(--darkGrey)]">
          Offers and Discounts
        </h2>
        <div>
          {" "}
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label
            for="vehicle1"
            className="text-[var(--darkGrey)] text-xl font-medium"
          >
            {" "}
            I have a bike
          </label>
        </div>
        <div>
          {" "}
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label
            for="vehicle1"
            className="text-[var(--darkGrey)] text-xl font-medium"
          >
            {" "}
            I have a bike
          </label>
        </div>
        <div>
          {" "}
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label
            for="vehicle1"
            className="text-[var(--darkGrey)] text-xl font-medium"
          >
            {" "}
            I have a bike
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
