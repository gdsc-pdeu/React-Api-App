import React, { useContext } from "react";
import { FaPlay, FaCompactDisc, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Track({ track }) {
  // console.log(track);
  return (
    <>
      <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 style={{textTransform:"uppercase"}}>{track.artist_name}</h5>
            <p className="card-text">
              <a
                href={`https://www.youtube.com/results?search_query=${track.track_name}+lyrics`}
                target="_blank"
              >
                <FaPlay color="grey" />
                &nbsp;
                <strong style={{ color: "grey" }}>{track.track_name}</strong>
              </a>
              <br></br>
              <a
                href={`https://www.youtube.com/results?search_query=${track.album_name}+songs`}
                target="_blank"
              >
                <strong style={{ color: "darkgray" }}>
                  <FaCompactDisc color="darkGrey" />
                  &nbsp; {track.album_name}
                </strong>
              </a>
            </p>
            <Link
              to={`lyrics/track/${track.track_id}`}
              className="btn btn-dark d-block"
            >
              <FaChevronRight />
              View Lyrics
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Track;
