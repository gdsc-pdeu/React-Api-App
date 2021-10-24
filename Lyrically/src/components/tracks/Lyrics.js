import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Moment from "react-moment";

function Lyrics({ match }) {
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://calm-refuge-37100.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        // console.log(res.data);
        setLyrics(res.data.message.body.lyrics);
        return axios.get(
          `https://calm-refuge-37100.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
        );
      })
      .then((res) => {
        // console.log(res.data);
        setTrack(res.data.message.body.track);
      })
      .catch((err) => console.log(err));
  }, []);

  if (
    track === undefined ||
    lyrics === undefined ||
    Object.keys(track).length === 0 ||
    Object.keys(lyrics).length === 0
  ) {
    return <Spinner />;
  } else {
    return (
      <React.Fragment>
        <Link to="/lyrically" className="btn btn-dark btn-sm mb-4">
          Go Back
        </Link>
        <div className="card">
          <h5 className="card-header">
            <a
              href={`https://www.youtube.com/results?search_query=${track.track_name}`}
              style={{ color: "inherit" }}
              target="_blank"
            >
              <strong>{track.track_name}</strong> ~{" "}
              <span className="text-secondary">{track.artist_name}</span>
            </a>
          </h5>
          <div className="card-body">
            <div className="card-text">
              {lyrics.lyrics_body === ""
                ? "No Lyrics Found"
                : lyrics.lyrics_body.split("\n").map((val,index) => <p key={index}>{val}</p>)}
            </div>
          </div>
        </div>
        <ul className="list-group mt-3">
          <li className="list-group-item">
            <strong>Album ID</strong>: {track.album_id}
          </li>
          <li className="list-group-item">
            <strong>Song Genre</strong>:{" "}
            {
              track.primary_genres.music_genre_list.length===0 ? "Not Available" : track.primary_genres.music_genre_list[0].music_genre
                .music_genre_name
            }
          </li>
          <li className="list-group-item">
            <strong>Explicit Words</strong>:{" "}
            {track.explicit === 0 ? "No" : "Yes"}
          </li>
          <li className="list-group-item">
            <strong>Updated Date</strong>:{" "}
            <Moment format="DD/MM/YYYY">{track.updated_time}</Moment>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Lyrics;
