import React from "react";
import { ReactComponent as PlayIcon } from "../svgs/play.svg";
import Playlists from "./Playlists";

const Categories = () => {
  const dataCategories = [
    {
      id: 1,
      name: "Focus",
    },
    {
      id: 2,
      name: "Mood",
    },
    {
      id: 3,
      name: "Sound track your home",
    },
    {
      id: 4,
      name: "Kid back this Sunday",
    },
  ];
  return (
    <div className="mainInner">
      {dataCategories.map((category, id) => {
        return (
          <>
            <div className="cardWrap" key={id}>
              <h2>{category.name}</h2>

              <p className="subText">Music to help you concentrate.</p>
              <Playlists categoryId={category.id} />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Categories;
