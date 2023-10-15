import React from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as PlayIcon } from "../svgs/play.svg";
import { ReactComponent as HeartIcon } from "../svgs/heart.svg";
import { ReactComponent as MusicIcon } from "../svgs/note.svg";

const PlaylistPage = (props) => {
  let { id } = useParams();
  return (
    <div className="playlistPage">
      <div className="mainInner">
        <div className="playlistPageInfo">
          <div className="playlistPageImage">
            <img
              src="https://images.unsplash.com/photo-1696233820406-982dec3540cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="Pic 1"
            ></img>
          </div>
          <div className="playlistPageContent">
            <p className="smallText upperCase bold">Playlist</p>
            <h1>A Perfect Day</h1>
            <p className="smallText tagline">
              Minimalism, electronica and modern classical to concentrate to.
            </p>
            <div className="playlistPageDesc">
              <p>Spotify</p>
              <span>699,428 likes</span>
              <span>4 hr 35 min</span>
            </div>
          </div>
        </div>
        <div className="playlistPageSong">
          <div className="playlistButtons">
            <span className="playIcon">
              <PlayIcon />
            </span>
            <div className="icons">
              <div className="icon iconHeart">
                <HeartIcon />
              </div>
              <div className="iconDots"></div>
            </div>
          </div>
          <ul className="songList">
            <li>
              <div className="songIcon">
                <MusicIcon className="note" />
                <PlayIcon className="play" />
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <MusicIcon className="note" />
                <PlayIcon className="play" />
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <MusicIcon className="note" />
                <PlayIcon className="play" />
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <MusicIcon className="note" />
                <PlayIcon className="play" />
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <MusicIcon className="note" />
                <PlayIcon className="play" />
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>

            <li>
              <div className="songIcon">
                <MusicIcon className="note" />
                <PlayIcon className="play" />
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
