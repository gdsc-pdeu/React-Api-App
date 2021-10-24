import React, { useContext, useState } from "react";
import { FaMusic } from "react-icons/fa";
import { GlobalContext } from "../../context";
import axios from "axios";
import Spinner from "../layout/Spinner";

function Search() {
  const { dispatch, isLoading, setIsLoading } = useContext(GlobalContext);
  const [trackTitle, setTrackTitle] = useState("");
  //   console.log(tracks)
  const findTrack = (e) => {
    if (trackTitle !== "") {
      e.preventDefault();
      setIsLoading(true)
      axios
        .get(
          `https://calm-refuge-37100.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
        )
        .then((res) => {
          // console.log(res.data);
        //   setIsLoading(false)
          // Action
          dispatch({
            type: "SEARCH_TRACKS",
            payload: res.data.message.body.track_list,
          });
          setIsLoading(false)
        //   setTrackTitle("");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="card card-body mb-4 p-4 bg-dark text-white">
      <h1 className="display-4 text-center">
        <FaMusic />
        {"  "}
        Search for a Song
      </h1>
      <p className="lead text-center">Get the lyrics for any song</p>
      <form className="form-group" onSubmit={findTrack}>
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Song Title ..."
          name="trackTitle"
          onChange={(e) => setTrackTitle(e.target.value)}
        />
        <button className="btn btn-success btn-lg btn-block mt-2" type="submit">
          Get Lyrics
        </button>
      </form>
    </div>
  );
}

export default Search;
