import React, { Component, useContext } from "react";
import { GlobalContext } from "../../context";
import Spinner from "../layout/Spinner";
import Track from "./Track";

const Tracks = () => {
  const { tracks, isLoading, setIsLoading } = useContext(GlobalContext);
  // console.log(tracks.track_list[0]);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : ( (tracks.track_list[0].length===0) ? <h1 className="text-center mb-5">We're Sorry 😥 <br/>Song Not Available</h1> :
        <>
          <h3 className="text-center mb-4">{tracks.heading}</h3>
          <div className="row">
            {tracks.track_list[0].map((item) => {
              // console.log(item);
              return <Track track={item.track} key={item.track.track_id} />;
            })}
          </div>
        </>
      )}
    </>
  );
};
export default Tracks;
