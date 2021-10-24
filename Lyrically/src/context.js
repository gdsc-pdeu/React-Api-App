import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";

const initialState = {
  track_list: [],
  heading: "Top 10 Tracks",
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "GET_TRACKS":
      return {
        ...state,
        track_list: [action.payload],
      };
    case "SEARCH_TRACKS":
      return {
        ...state,
        track_list: [action.payload],
        heading: "Search Results",
      };
    default:
      return state;
  }
};

//createContext
export const GlobalContext = React.createContext(initialState);

//create GlobalProvider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `https://calm-refuge-37100.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        // console.log(res.data);
        // Action
        dispatch({
          type: "GET_TRACKS",
          payload: res.data.message.body.track_list,
        });
        setIsLoading(false)
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <GlobalContext.Provider
      value={{ tracks: state, dispatch, isLoading, setIsLoading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
