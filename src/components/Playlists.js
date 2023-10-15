import React from "react";
import { ReactComponent as PlayIcon } from "../svgs/play.svg";
import { Link } from "react-router-dom";

const Playlists = (props) => {
  const dataPlaylists = [
    {
      id: 101,
      categoy_id: 3,
      name: "Home playlist 1",
      img: "https://images.unsplash.com/photo-1696233820406-982dec3540cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      describe: "Lorem ipsum",
    },
    {
      id: 102,
      categoy_id: 3,
      name: "Home playlist 2",
      img: "https://images.unsplash.com/photo-1695990190036-9a2c311b0e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      describe: "Lorem ipsum",
    },
    {
      id: 103,
      categoy_id: 3,
      name: "Home playlist 3",
      img: "https://images.unsplash.com/photo-1696215752863-d97f9bd17576?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      describe: "Lorem ipsum",
    },

    {
      id: 104,
      categoy_id: 3,
      name: "Home playlist 4",
      img: "https://images.unsplash.com/photo-1696456108875-887d77731e9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      describe: "Lorem ipsum",
    },
    {
      id: 105,
      categoy_id: 4,
      name: "Sunday playlist 1",
      img: "https://images.unsplash.com/photo-1697222750299-602d54d004b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      describe: "Lorem ipsum",
    },
    {
      id: 106,
      categoy_id: 2,
      name: "Mood playlist 1",
      img: "https://images.unsplash.com/photo-1696942916304-7908f9cd5f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      describe: "Lorem ipsum",
    },
    {
      id: 107,
      categoy_id: 2,
      name: "Mood playlist 2",
      img: "https://images.unsplash.com/photo-1696185137293-418bdf31a8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      describe: "Lorem ipsum",
    },
    {
      id: 108,
      categoy_id: 1,
      name: "My playlist 1",
      img: "https://images.unsplash.com/photo-1696585042188-328740cd265c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      describe: "Lorem ipsum",
    },
  ];

  const matchedPlaylists = dataPlaylists.filter(
    (playlist) => playlist.categoy_id === props.categoryId
  );
  return (
    <div className="cardWrapInner">
      {matchedPlaylists.map((playlist, id) => (
        <Link to={`/playlist/` + playlist.id}>
          <div className="card" key={id}>
            <div className="cardImage">
              <img src={playlist.img} alt="Image 1" />
            </div>
            <div className="cardContent">
              <h3>{playlist.name}</h3>
              <p className="subText">{playlist.describe}</p>
            </div>
            <span className="playIcon">
              <PlayIcon />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Playlists;
