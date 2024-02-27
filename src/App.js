import React, { useState, useEffect } from "react";
import Search from "./Components/SearchBar";
import Meaning from "./Components/MeaningDisplay";
import { fetch_words } from "./API/GetWords";
import Word from "./Components/WordDisplay";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchInitiated, setSearchInitiated] = useState(false);
  async function fetch_data(word) {
    try {
      setLoading(true);
      setSearchInitiated(true);
      const get_data = await fetch_words(word);
      setData({ ...get_data[0] });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="m-16">
      <Search callback={fetch_data} />
      {loading ? (
        <p className="mt-18 font-bold text-2xl">Loading...</p>
      ) : (
        <>
          {searchInitiated && Object.keys(data).length === 0 ? (
            <p className="mt-18 font-bold text-2xl">No Words Found</p>
          ) : (
            <>
              <Word data={data} />
              <Meaning data={data} />
            </>
          )}
        </>
      )}
    </div>
  );
}
export default App;
